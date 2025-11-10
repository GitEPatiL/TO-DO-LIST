import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { submitLead } from '../api';

export default function GetStartedModal({ show, onHide, onSuccess }) {
  const initial = { firstName: '', lastName: '', gender: '', languages: [], email: '' };
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null);
  const [saving, setSaving] = useState(false);

  const setField = (name, value) => setForm(prev => ({ ...prev, [name]: value }));
  const toggleLanguage = (lang) =>
    setForm(prev => {
      const has = prev.languages.includes(lang);
      return { ...prev, languages: has ? prev.languages.filter(l => l !== lang) : [...prev.languages, lang] };
    });

  function validate() {
    const e = {};
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.firstName.trim()) e.firstName = 'First name required';
    if (!form.lastName.trim()) e.lastName = 'Last name required';
    if (!['Male', 'Female'].includes(form.gender)) e.gender = 'Select gender';
    if (!form.languages.length) e.languages = 'Pick at least one language';
    if (!emailRe.test(form.email)) e.email = 'Valid email required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e) {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;
    setSaving(true);
    try {
      await submitLead(form);
      onSuccess(); // Signal success to the parent component
      setErrors({});
    } catch (err) {
      const apiError = err?.response?.data?.errors || 'Submit failed. Please try again.';
      setServerError(apiError);
    } finally {
      setSaving(false);
    }
  }

  function closeAll() {
    setServerError(null);
    setErrors({});
    onHide();
  }

  return (
    <Modal show={show} onHide={closeAll} centered>
      <Modal.Header closeButton><Modal.Title>Get Started Today!</Modal.Title></Modal.Header>
      <Modal.Body>
        <p className="text-muted">Fill in your details and take control of your tasks.</p>

        {serverError && <Alert variant="danger">{serverError}</Alert>}

        <Form onSubmit={onSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  value={form.firstName}
                  onChange={e => setField('firstName', e.target.value)}
                  isInvalid={!!errors.firstName}
                  placeholder="Enter your first name"
                />
                <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  value={form.lastName}
                  onChange={e => setField('lastName', e.target.value)}
                  isInvalid={!!errors.lastName}
                  placeholder="Enter your last name"
                />
                <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <div className="mb-2">
            <Form.Label>Gender</Form.Label>
            <div>
              <Form.Check inline type="radio" label="Male" name="gender"
                checked={form.gender === 'Male'} onChange={() => setField('gender', 'Male')} />
              <Form.Check inline type="radio" label="Female" name="gender"
                checked={form.gender === 'Female'} onChange={() => setField('gender', 'Female')} />
            </div>
            {errors.gender && <div className="text-danger small">{errors.gender}</div>}
          </div>

          <div className="mb-2">
            <Form.Label>Language</Form.Label>
            <div>
              {['English', 'Hindi', 'Marathi'].map(lang => (
                <Form.Check key={lang} type="checkbox" label={lang}
                  checked={form.languages.includes(lang)} onChange={() => toggleLanguage(lang)} />
              ))}
            </div>
            {errors.languages && <div className="text-danger small">{errors.languages}</div>}
          </div>

          <Form.Group className="mb-2">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              value={form.email}
              onChange={e => setField('email', e.target.value)}
              isInvalid={!!errors.email}
              placeholder="Enter your email address"
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" variant="danger" className="w-100" disabled={saving}>
            {saving ? 'Saving...' : 'Done'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
