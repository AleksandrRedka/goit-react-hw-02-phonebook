import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import toastShow from '../helpers/toast';

// Animation and styles

import styles from './ListContacts.module.css';
import transitionPop from '../../transition/transitionPop.module.css';
import transitionDescent from '../../transition/transitionDescent.module.css';

// Redux Actions

import * as contactsActions from '../../redux/contacts/contactsActions';

const ListContacts = ({ contacts }) => {
  const dispatch = useDispatch();

  const [transition, setTransition] = useState(false);

  useEffect(() => setTransition(true), []);

  const handleDelete = id => {
    dispatch(contactsActions.deleteContact(id));
    toastShow('✅ Контакт успешно удален!', 'success');
  };
  return (
    contacts.length > 0 && (
      <CSSTransition
        in={transition}
        timeout={700}
        classNames={transitionDescent}
        unmountOnExit
      >
        <div className={styles.wrapperListContact}>
          <TransitionGroup component="ul" className={styles.listContact}>
            {contacts.map(contact => (
              <CSSTransition
                key={contact.id}
                timeout={500}
                classNames={transitionPop}
                unmountOnExit
              >
                <li className={styles.contactItem}>
                  <p>{contact.name}</p>
                  <p>{contact.number}</p>
                  <button
                    type="button"
                    className={styles.btnDelete}
                    onClick={() => handleDelete(contact.id)}
                  >
                    &#65794;
                  </button>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </CSSTransition>
    )
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ListContacts;
