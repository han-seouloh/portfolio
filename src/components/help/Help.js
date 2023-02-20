import { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { resetClicks } from '../../store/clicksSlice';
import { resetPlanets, selectPlanets, setSelection } from '../../store/planetsSlice';
import styles from './Help.module.css';

export const Help = () => {
  const [focus, setFocus] = useState(false);
  const { planets, selection } = useSelector(selectPlanets);
  const otherViews = planets[selection].view;
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(selection !== 'default') {
      setFocus(false);
    }
  }, [selection]);

  const handleClick = () => {
    dispatch(setSelection('default'))
    dispatch(resetPlanets());
    dispatch(resetClicks());
    if (focus) {
      setFocus(false);
    } else {
      setFocus(true);
    };
  };

  return (
    <div 
      className={`
        ${focus ? styles['help-focus'] : styles.help}
        ${otherViews ? styles.disable : null}
      `}
      onClick={handleClick}
    >
      <h2 className={focus ? styles.disable : styles.h2}>?</h2>
      {focus && <CgClose className={styles.close}/>}
      <div className={focus ? `${styles.signal} ${styles['signal-1']}` : styles['signal-hide']}></div>
      <div className={focus ? `${styles.signal} ${styles['signal-2']}` : styles['signal-hide']}></div>
      <div className={focus ? `${styles.signal} ${styles['signal-3']}` : styles['signal-hide']}></div>
      <section className={focus ? styles.section : styles['section-off']}>
        <h2>Tutorial</h2>
        <p>Interactions with planets:</p>
        <ul >
          <li >
            Hover on any of the orbiting planets to pause
            the system and highlight its orbit. <span>(For Desktop Only)</span>
          </li>
          <li>
            Click on any of the planets to focus it and
            display a preview of the planet's content.
            <span> (You can switch to other planets in this mode)</span>
          </li>
          <li>
            While focused, a second click will display the contents
            of the planet.
          </li>
        </ul>
        <span className={styles.suggestion}>
          For the best experience, open this portfolio from a PC or Laptop
          web browser.
        </span>
      </section>
    </div>
  );
};