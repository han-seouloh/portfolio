import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets, setPlanetAnimation, setPlanetOrbit } from '../../store/planetsSlice';
import styles from './Minireddit.module.css';

export const Minireddit = () => {
  const dispatch = useDispatch();
  const { planets } = useSelector(selectPlanets);
  const animation = planets.minireddit.animation;
  const hover = planets.minireddit.hover;

  const handleHoverOn = () => {
    dispatch(setPlanetAnimation(false));
    dispatch(setPlanetOrbit({name: 'minireddit', payload: true}));
  };
  const handleHoverOff = () => {
    dispatch(setPlanetAnimation(true));
    dispatch(setPlanetOrbit({name: 'minireddit', payload: false}));
  };

  return (
    <div 
      className={`
        ${styles['orbit']}
        ${animation ? null : styles['pause']}
        ${hover ? styles['orbit-hover'] : null}
      `}
    >
      <section 
        className={styles['minireddit']}
        onMouseEnter = {handleHoverOn}
        onMouseLeave = {handleHoverOff}
      >
      </section>
    </div>
  );
};