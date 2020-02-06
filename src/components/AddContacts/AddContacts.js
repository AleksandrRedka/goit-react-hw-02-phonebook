import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
// Helpers
import shortid from 'shortid';
import toastShow from '../helpers/toast';
// Operation and Action in Redux
import * as contactsActions from '../../redux/contacts/contactsActions';
import * as contactsSelectors from '../../redux/contacts/contactsSelectors';

import * as formAddContactActions from '../../redux/formAddContact/formAddContactActions';
import * as formAddContactSelectors from '../../redux/formAddContact/formAddContactSelectors';
// Styles
import styles from './AddContacts.module.css';
import transitionPop from '../../transition/transitionPop.module.css';

const generateId = () => shortid.generate();
const AddContacts = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const name = useSelector(formAddContactSelectors.getName);
  const number = useSelector(formAddContactSelectors.getNumber);
  const [transition, setTransition] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => setTransition(true), []);

  const handleChangeInput = ({ target }) => {
    if (target.name === 'name') {
      dispatch(formAddContactActions.changeName(target.value));
    }
    if (target.name === 'number') {
      dispatch(formAddContactActions.changeNumber(target.value));
    }
  };

  const validContact = contact => {
    if (name !== '' && number !== '') {
      const thisNewContact = contacts.some(
        c => c.name.trim().toLowerCase() === contact.name.trim().toLowerCase(),
      );
      if (!thisNewContact) {
        return true;
      }
      return toastShow('❌ Контакт с таким именем уже существует!', 'error');
    }
    toastShow('⛔️ Вы не заполнили все поля!', 'error');
    return false;
  };

  const handleCreateContact = e => {
    e.preventDefault();
    if (validContact({ name, number })) {
      dispatch(
        contactsActions.addContact({
          id: generateId(),
          name: name.trim(),
          number: number.trim(),
        }),
      );
      dispatch(formAddContactActions.changeName(''));
      dispatch(formAddContactActions.changeNumber(''));
      toastShow('✅ Контакт добавлен', 'success');
    }
  };

  return (
    <CSSTransition in={transition} timeout={500} classNames={transitionPop}>
      <div className={styles.addContact}>
        <h3>Add Contact</h3>
        <form className={styles.formCreate} onSubmit={handleCreateContact}>
          <label htmlFor={generateId()}>
            Name
            <input
              type="text"
              placeholder="Name contact"
              name="name"
              value={name}
              onChange={handleChangeInput}
              autoComplete="off"
            />
          </label>
          <label htmlFor={generateId()}>
            Number
            <input
              type="number"
              placeholder="Number contact"
              name="number"
              value={number}
              onChange={handleChangeInput}
              autoComplete="off"
            />
          </label>
          <button type="submit">Add Contacts</button>
        </form>
      </div>
    </CSSTransition>
  );
};

export default AddContacts;
