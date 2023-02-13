import { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { resetClicks } from '../../store/clicksSlice';
import { resetPlanets, selectPlanets } from '../../store/planetsSlice';
import styles from './Help.module.css';

export const Help = () => {
  const [focus, setFocus] = useState(false);
  const { planets, selection } = useSelector(selectPlanets);
  const otherViews = planets[selection].view;
  const dispatch = useDispatch();
  
  useEffect(() => {
    setFocus(false);
  }, [selection, otherViews]);

  const handleClick = () => {
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
      </section>
    </div>
  );
};