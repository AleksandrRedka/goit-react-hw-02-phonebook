export const Type = {
  CHANGE_NAME: 'CHANGE_NAME',
  CHANGE_NUMBER: 'CHANGE_NUMBER',
  CREATE_CONTACT: 'CREATE_CONTACT',
};

export const changeName = name => ({
  type: Type.CHANGE_NAME,
  payload: name,
});

export const changeNumber = number => ({
  type: Type.CHANGE_NUMBER,
  payload: number,
});

export const createContact = contact => ({
  type: Type.CREATE_CONTACT,
  payload: contact,
});
