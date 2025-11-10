import axios from 'axios';
const BASE = 'http://localhost:1000';

export function submitLead(payload) {
  return axios.post(`${BASE}/tasks`, payload).then(r => r.data);
}
export function fetchTasks() {
  return axios.get(`${BASE}/tasks`).then(r => r.data);
}
