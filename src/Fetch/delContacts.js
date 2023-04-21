import axios from 'axios';

axios.defaults.baseURL = 'https://64429ddd33997d3ef91539c5.mockapi.io';

export async function delContacts(id) {
  // console.log(id);
  const response = axios.delete(`/contacts/${id}`);
  return response;
}
