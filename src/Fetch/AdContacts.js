import axios from 'axios';

axios.defaults.baseURL = 'https://64429ddd33997d3ef91539c5.mockapi.io';

export async function AdContacts({ name, phone }) {
  console.log('+++++');
  console.log(name);
  console.log(phone);
  const response = axios.post(`/contacts`, { name, phone });
  return response;
}
