import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import contactsReducers from './contacts/contactsReducers';
import formContactReducers from './formAddContact/formAddContactReducers';
import searchValueReducers from './searchValue/searchValueReducers';

const rootReducer = combineReducers({
  contacts: contactsReducers,
  formContact: formContactReducers,
  searchValue: searchValueReducers,
});

// const enhanser = applyMiddleware(logger);

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
