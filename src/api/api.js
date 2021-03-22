import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export function addContact(contact) {
  return axios.post('/contacts', contact);
}

export function deleteContact(id) {
  return axios.delete(`/contacts/${id}`);
}

export function fetchContacts() {
    return axios.get('/contacts');
  }
  
export default { fetchContacts, addContact, deleteContact };
