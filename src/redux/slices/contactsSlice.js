import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = { items: [] };

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer: ({ items }, { payload }) => {
        items.push(payload);
      },
      prepare: (contactCredentials) => {
        return {
          payload: {
            id: nanoid(),
            createdAt: new Date().toISOString(),
            ...contactCredentials,
          },
        };
      },
    },
    deleteContact: ({ items }, { payload }) =>
      items.filter((contact) => contact.id !== payload),
  },
});


export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
