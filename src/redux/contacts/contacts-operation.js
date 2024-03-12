import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'shared/servises/contacts-api';

export const fetchAllContacts = createAsyncThunk('contacts/fatch-all', async (_, thunkApi) => {
  try {
    const data = await api.getAllContacts();
    return data;
  } catch ({ response }) {
    return thunkApi.rejectWithValue(response.data.message);
  }
});

export const fetchAddContact = createAsyncThunk(
  'contacts/add', //first argument
  async (data, { rejectWithValue }) => {
    try {
      const { name, phoneNumber } = data;
      const result = await api.addContact({ name, phoneNumber });
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: ({ name }, { getState }) => {
      const { contacts } = getState();

      const normalizeName = name.toLowerCase();
      const result = contacts.items.find(({ name }) => {
        return name.toLowerCase() === normalizeName;
      });
      if (result) {
        alert(`${name} is already in contacts`);
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
