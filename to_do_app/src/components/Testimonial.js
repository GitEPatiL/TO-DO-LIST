import React, { useState, useEffect } from 'react';
import { Container, Table, Alert } from 'react-bootstrap';
import { fetchTasks } from '../api';

export default function SubmissionsTable() {
  const navy = '#0C1330';
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setLoading(true);
        const data = await fetchTasks();
        setTasks(data);
      } catch (err) {
        setError('Failed to fetch submissions. Please make sure the backend server is running.');
        console.error('Error fetching tasks:', err);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  return (
    <section style={{ padding: '72px 0', background: '#F8F9FC' }}>
      <Container>
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: navy, marginBottom: 6 }}>
            All Submissions
          </h2>
          <p style={{ color: '#6B7280', margin: 0 }}>
            Here is a list of all the data submitted through the form.
          </p>
        </div>

        {loading && <p>Loading submissions...</p>}
        {error && <Alert variant="danger">{error}</Alert>}
        {!loading && !error && (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Languages</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.firstName}</td>
                  <td>{task.lastName}</td>
                  <td>{task.email}</td>
                  <td>{task.gender}</td>
                  <td>{Array.isArray(task.languages) ? task.languages.join(', ') : ''}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </section>
  );
}
