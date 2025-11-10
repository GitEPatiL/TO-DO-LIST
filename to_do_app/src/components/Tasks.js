import React, { useState, useEffect } from 'react';
import { Container, Table, Alert, Form, Spinner, Pagination } from 'react-bootstrap';
import { fetchTasks } from '../api';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 4;

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchTasks();
        setTasks(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(
          'Failed to fetch submissions. Ensure the backend server is running.'
        );
        console.error('Error fetching tasks:', err);
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, []);

  const formatLanguages = (langs) =>
    Array.isArray(langs) ? langs.filter(Boolean).join(', ') : (langs || '');

  const formatName = (f, l) => [f, l].filter(Boolean).join(' ');

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);
  const pageCount = Math.ceil(tasks.length / tasksPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section style={{ padding: '72px 0', background: '#F8F9FC' }}>
      <Container>

        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: '#001F3F', marginBottom: 6 }}>
            All Tasks
          </h2>
          <p style={{ color: '#6B7280', margin: 0 }}>
            Here is a list of all the data submitted through the form.
          </p>
        </div>

        {loading && (
          <div className="d-flex justify-content-center align-items-center py-5">
            <Spinner animation="border" role="status" className="me-2" />
            <span>Loading tasks…</span>
          </div>
        )}

        {error && <Alert variant="danger" className="mb-0">{error}</Alert>}

        {!loading && !error && tasks.length === 0 && (
          <div
            className="text-center p-5"
            style={{
              background: 'white',
              borderRadius: 12,
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            }}
          >
            <h5 className="mb-1">No submissions yet</h5>
            <p className="mb-0" style={{ color: '#6B7280' }}>
              New entries will appear here after the form is submitted.
            </p>
          </div>
        )}

        {!loading && !error && tasks.length > 0 && (
          <div // This div wraps the table
            style={{
              background: 'white',
              borderRadius: 12,
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              overflow: 'hidden',
            }}
          >
            <Table hover responsive className="m-0 align-middle">
              <thead style={{ backgroundColor: '#F3F4F6' }}>
                <tr>
                  <th style={{ width: 50 }}>
                    <Form.Check type="checkbox" aria-label="Select all" />
                  </th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Language</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {currentTasks.map((task) => (
                  <tr key={task.id ?? `${task.email}-${task.firstName}-${task.lastName}`}>
                    <td>
                      <Form.Check type="checkbox" aria-label="Select row" />
                    </td>
                    <td>{formatName(task.firstName, task.lastName)}</td>
                    <td>{task.gender || '-'}</td>
                    <td>{formatLanguages(task.languages) || '-'}</td>
                    <td>
                      <a href={`mailto:${task.email}`} className="text-decoration-none">
                        {task.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}

        {/* Pagination Controls */}
        {!loading && !error && pageCount > 1 && (
          <div className="d-flex justify-content-center mt-4">
            <Pagination>
              {Array.from({ length: pageCount }, (_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        )}
      </Container>
    </section>
  );
}
