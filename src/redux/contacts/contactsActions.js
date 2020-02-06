export const Type = {
  FETCH_CONTACTS: 'FETCH_CONTACTS',
  ADD_CONTACT: 'ADD_CONTACT',
  DELETE_CONTACT: 'DELETE_CONTACT',
};

//* FETCH - CONTACTS  *//

export const fetchContact = contacts => ({
  type: Type.FETCH_CONTACTS,
  payload: { contacts },
});

//* ADD - CONTACT *//
export const addContact = contact => ({
  type: Type.ADD_CONTACT,
  payload: { contact },
});

// DELETE - CONTACT
export const deleteContact = id => ({
  type: Type.DELETE_CONTACT,
  payload: { id },
});
