import axios from 'axios';

axios.defaults.baseURL = 'https://64429ddd33997d3ef91539c5.mockapi.io';

export async function getContacts() {
  const response = axios.get('/contacts');
  return response;
}
