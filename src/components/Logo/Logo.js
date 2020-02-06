import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Logo.module.css';
import transitionSlide from '../../transition/transitionSlide.module.css';

const Logo = () => {
  const [transition, setTransition] = useState(false);

  useEffect(() => setTransition(true), []);

  return (
    <CSSTransition in={transition} timeout={700} classNames={transitionSlide}>
      <h1 className={styles.logo}>Phonebook</h1>
    </CSSTransition>
  );
};

export default Logo;
