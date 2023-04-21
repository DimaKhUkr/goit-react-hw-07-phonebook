import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './AddContactsSlice';
import { filterReducer } from './filterSlice';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});
