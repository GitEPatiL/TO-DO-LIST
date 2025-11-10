// Simple Express backend to save form data into a JSON file (tasks.json)

const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 1000; // change if you want

// File path where tasks are saved
const DATA_FILE = path.join(__dirname, 'data', 'tasks.json');

// Middlewares
app.use(cors());
app.use(express.json({ extended: true }));

// Read tasks from file (create file if not found)
async function getTasks() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data).tasks || [];
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.writeFile(DATA_FILE, JSON.stringify({ tasks: [] }, null, 2));
      return [];
    } else {
      throw err;
    }
  }
}

// Save all tasks back to file
async function saveTasks(tasks) {
  await fs.writeFile(DATA_FILE, JSON.stringify({ tasks }, null, 2));
}

// POST /tasks → save form data
app.post('/tasks', async (req, res) => {
  try {
    const { firstName, lastName, gender, languages, email } = req.body;

    // More robust validation
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !['Male', 'Female'].includes(gender) ||
      !Array.isArray(languages) ||
      !languages.length ||
      !emailRe.test(email)
    ) {
      return res.status(400).json({ errors: 'Please fill all required fields properly.' });
    }

    const tasks = await getTasks();

    // Find the highest existing ID and add 1, or start at 1 if no tasks exist.
    // This is now resilient to non-numeric IDs in the data file.
    const numericIds = tasks.map(t => parseInt(t.id, 10)).filter(id => !isNaN(id));
    const maxId = numericIds.length > 0 ? Math.max(...numericIds) : 0;
    const newId = (maxId + 1).toString();

    const newTask = {
      id: newId,
      firstName,
      lastName,
      gender,
      languages,
      email
    };

    tasks.push(newTask);
    await saveTasks(tasks);

    res.status(201).json({ message: 'Form data saved successfully', data: newTask });
  } catch (err) {
    console.error('Error saving data:', err);
    res.status(500).json({ error: 'Something went wrong on the server.' });
  }
});

// GET /tasks → show all saved form entries
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await getTasks();
    res.json(tasks);
  } catch (err) {
    console.error('Error reading data:', err);
    res.status(500).json({ error: 'Unable to fetch data.' });
  }
});

// GET /tasks/:id → show a single task by its ID
app.get('/tasks/:id', async (req, res) => {
  try {
    const tasks = await getTasks();
    const task = tasks.find(t => t.id === req.params.id);

    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (err) {
    console.error('Error reading data:', err);
    res.status(500).json({ error: 'Unable to fetch data.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
