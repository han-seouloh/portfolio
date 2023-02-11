import { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr'
import { useSelector } from 'react-redux';
import { selectPlanets } from '../../store/planetsSlice';
import styles from './Help.module.css';

export const Help = () => {
  const [focus, setFocus] = useState(false);
  const { planets, selection } = useSelector(selectPlanets);
  const otherViews = planets[selection].view;
  
  useEffect(() => {
    setFocus(false);
  }, [selection, otherViews]);

  const handleClick = () => {
    if (focus) {
      setFocus(false)
    } else {
      setFocus(true)
    }
  };

  return (
    <div 
      className={`
        ${focus ? styles['help-focus'] : styles.help}
        ${otherViews ? styles.disable : null}
      `}
      onClick={handleClick}
    >
      <h2 className={focus ? null : styles.h2}>?</h2>
      {focus && <GrClose />}
      <section>
      </section>
    </div>
  );
};