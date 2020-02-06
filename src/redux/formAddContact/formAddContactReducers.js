import { combineReducers } from 'redux';
import { Type } from './formAddContactActions';

const nameReducer = (state = '', { type, payload }) => {
  switch (type) {
    case Type.CHANGE_NAME:
      return payload;
    default:
      return state;
  }
};

const numberReducer = (state = '', { type, payload }) => {
  switch (type) {
    case Type.CHANGE_NUMBER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  name: nameReducer,
  number: numberReducer,
});
