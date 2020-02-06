import { Type } from './searchValueActions';

const searchValueReduser = (state = '', { type, payload }) => {
  switch (type) {
    case Type.CHANGE_SEARCH_VALUE:
      return payload.value;

    default:
      return state;
  }
};

export default searchValueReduser;
