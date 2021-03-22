import actions from './phoneBook-actions';
import api from '../../api/phoneBook-api';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());
  try {
    const { data } = await api.fetchContacts();
    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error.message));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = { name, number };
  console.log(contact);
  dispatch(actions.addContactRequest());
  try {
    const { data } = await api.addContact(contact);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error.message));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());
  try {
    await api.deleteContact(id);
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error.message));
  }
};

export default { fetchContacts, addContact, deleteContact };
