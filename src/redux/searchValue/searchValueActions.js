export const Type = {
  CHANGE_SEARCH_VALUE: 'CHANGE_SEARCH_VALUE',
};

export const changeSearchValue = value => ({
  type: Type.CHANGE_SEARCH_VALUE,
  payload: {
    value,
  },
});
