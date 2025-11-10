const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const FILE = path.join(__dirname, 'data', 'tasks.json');

app.use(cors());
app.use(express.json());

async function readTasks() {
  try {
    const txt = await fs.readFile(FILE, 'utf8');
    const obj = JSON.parse(txt);
    return obj.tasks || [];
  } catch (e) {
    if (e.code === 'ENOENT') {
      await fs.writeFile(FILE, JSON.stringify({ tasks: [] }, null, 2));
      return [];
    }
    throw e;
  }
}

async function writeTasks(tasks) {
  await fs.writeFile(FILE, JSON.stringify({ tasks }, null, 2));
}

function nextId(tasks) {
  const nums = tasks
    .map(t => parseInt(t.id, 10))
    .filter(n => Number.isFinite(n));
  const max = nums.length ? Math.max(...nums) : 0;
  return String(max + 1);
}

app.post('/tasks', async (req, res) => {
  try {
    const { firstName, lastName, gender, languages, email } = req.body;

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !['Male', 'Female'].includes(gender) ||
      !Array.isArray(languages) || languages.length === 0 ||
      !emailRe.test(email)
    ) {
      return res.status(400).json({ error: 'Please fill required fields.' });
    }

    const tasks = await readTasks();
    const task = {
      id: nextId(tasks),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      gender,
      languages,
      email: email.toLowerCase(),
      createdAt: new Date().toISOString()
    };

    tasks.push(task);
    await writeTasks(tasks);

    res.status(201).json({ message: 'Saved', task });
  } catch (err) {
    console.error('POST /tasks error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/tasks', async (_req, res) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (err) {
    console.error('GET /tasks error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/tasks/:id', async (req, res) => {
  try {
    const tasks = await readTasks();
    const task = tasks.find(t => t.id === req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    console.error('GET /tasks/:id error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(1000)
