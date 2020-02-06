import { combineReducers } from 'redux';
import { Type } from './contactsActions';

const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_CONTACTS:
      return payload.contacts;
    case Type.ADD_CONTACT:
      return [...state, payload.contact];
    case Type.DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload.id);
    default:
      return state;
  }
};
export default combineReducers({
  items: contactsReducer,
});
