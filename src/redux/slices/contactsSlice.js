import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = [];

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact(state, { payload }) {
      state.push(payload);
    },
    deleteContact(state, { payload }) {
      return state.filter((contact) => contact.id !== payload);
    },
  },
});

// TODO: add persisting logic

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
