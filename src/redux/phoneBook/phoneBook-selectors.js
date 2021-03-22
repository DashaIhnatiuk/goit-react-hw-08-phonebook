import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getAllContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getError = state => state.contacts.error;

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
export default {
  getLoading,
  getAllContacts,
  getFilter,
  getError,
  getFilteredContacts,
};
