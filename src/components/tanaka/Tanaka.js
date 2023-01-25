import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets, setPlanetAnimation, setPlanetOrbit } from '../../store/planetsSlice';
import styles from './Tanaka.module.css';

export const Tanaka = () => {
  const dispatch = useDispatch();
  const { planets } = useSelector(selectPlanets);
  const animation = planets.tanaka.animation;
  const hover = planets.tanaka.hover;

  const handleHoverOn = () => {
    dispatch(setPlanetAnimation(false));
    dispatch(setPlanetOrbit({name:'tanaka', payload: true}));
  };
  const handleHoverOff = () => {
    dispatch(setPlanetAnimation(true));
    dispatch(setPlanetOrbit({name:'tanaka', payload: false}));
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
        className={styles['tanaka']}
        onMouseEnter = {handleHoverOn}
        onMouseLeave = {handleHoverOff}
      >
      </section>
    </div>
  );
};