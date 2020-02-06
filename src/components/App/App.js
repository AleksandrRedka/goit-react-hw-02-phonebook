import React from 'react';
import { Provider } from 'react-redux';
import Phonebook from '../Phonebook/Phonebook';
import store from '../../redux/store';

function App() {
  return (
    <Provider store={store}>
      <Phonebook />
    </Provider>
  );
}

export default App;
