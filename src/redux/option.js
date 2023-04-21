import { createAsyncThunk } from '@reduxjs/toolkit';
import { AdContacts } from 'Fetch/AdContacts';
import { delContacts } from 'Fetch/delContacts';
import { getContacts } from 'Fetch/getContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await getContacts();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchDelContacts = createAsyncThunk(
  'contacts/fetchDelContacts',
  async (id, thunkAPI) => {
    try {
      const response = await delContacts(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAdContacts = createAsyncThunk(
  'contacts/fetchAdContacts',
  async (data, thunkAPI) => {
    try {
      const response = await AdContacts(data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
