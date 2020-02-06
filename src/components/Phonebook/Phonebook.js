import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Phonebook.module.css';
import Logo from '../Logo/Logo';
import AddContacts from '../AddContacts/AddContacts';
import SearchContact from '../SearchContact/SearchContact';
import ListContacts from '../ListContacts/ListContacts';
import * as searchValueSelectors from '../../redux/searchValue/searchValueSelectors';
import * as contactsSelectors from '../../redux/contacts/contactsSelectors';
import * as contactsActions from '../../redux/contacts/contactsActions';

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name
      .trim()
      .toLowerCase()
      .includes(filter.trim().toLowerCase()),
  );
};

const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(searchValueSelectors.getsearchValue);

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) {
      dispatch(contactsActions.fetchContact(localContacts));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // handleCreateContacts = contact => {
  //   const { contacts } = this.state;
  //   const thisNewContact = contacts.some(
  //     c => c.name.trim().toLowerCase() === contact.name.trim().toLowerCase(),
  //   );
  //   if (!thisNewContact) {
  //     this.setState(s => ({
  //       contacts: [...s.contacts, contact],
  //     }));
  //     toastShow('✅ Контакт Добавлен!', 'success');
  //   } else {
  //     toastShow('❌ Контакт с таким именем уже существует!', 'error');
  //   }
  // };

  // const handleDeleteContact = id => {
  //   dispatch(contactsOperation.deleteContacts(id));
  //   toastShow('✅ Контакт успешно удален!', 'success');
  // };
  const filteredContacts = filterContacts(contacts, filter);
  return (
    <div className={styles.container}>
      <Logo />
      <AddContacts />

      {contacts.length > 1 && (
        <>
          <h3>Search Contact</h3>
          <SearchContact />
        </>
      )}
      {filteredContacts.length > 0 && (
        <div>
          <h2>Contacts</h2>
          <ListContacts contacts={filteredContacts} />
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Phonebook;
