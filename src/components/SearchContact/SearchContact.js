import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import styles from './SearchContact.module.css';
import transitionPop from '../../transition/transitionPop.module.css';
import * as searchValueSelectors from '../../redux/searchValue/searchValueSelectors';
import * as searchValueActions from '../../redux/searchValue/searchValueActions';

const generateId = () => shortid.generate();

const SearchContact = () => {
  const dispatch = useDispatch();
  const [transition, setTransition] = useState(false);
  const value = useSelector(searchValueSelectors.getsearchValue);
  useEffect(() => setTransition(true), []);
  return (
    <>
      <CSSTransition in={transition} timeout={500} classNames={transitionPop}>
        <label className={styles.searchInput} htmlFor={generateId()}>
          Find contacts by name
          <input
            type="text"
            placeholder="Enter name contact"
            name="filter"
            value={value}
            onChange={e =>
              dispatch(searchValueActions.changeSearchValue(e.target.value))
            }
            autoComplete="off"
          />
        </label>
      </CSSTransition>
    </>
  );
};

export default SearchContact;
