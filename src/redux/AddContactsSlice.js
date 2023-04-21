import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, fetchDelContacts, fetchAdContacts } from './option';
// import { delContacts } from 'Fetch/delContacts';

const AddContactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {
    addContact: (state, action) => [action.payload, ...state],

    // deleteContact: (state, action) =>
    //   state.filter(contact => contact.id !== action.payload),
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchDelContacts.fulfilled](state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [fetchDelContacts.rejected](state, action) {
      state.error = action.payload;
    },

    [fetchAdContacts.fulfilled](state, action) {
      // console.log(action.payload);
      state.items.push(action.payload);
    },
    [fetchAdContacts.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export const { addContact, deleteContact } = AddContactsSlice.actions;
export const contactsReducer = AddContactsSlice.reducer;
