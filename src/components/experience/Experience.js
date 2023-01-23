import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets, setPlanetAnimation, setPlanetOrbit } from '../../store/planetsSlice';
import styles from './Experience.module.css';

export const Experience = () => {
  const dispatch = useDispatch();
  const { planets } = useSelector(selectPlanets);
  const animation = planets.experience.animation;
  const hover = planets.experience.hover;

  const handleHoverOn = () => {
    dispatch(setPlanetAnimation(false));
    dispatch(setPlanetOrbit({name:'experience', payload: true}));
  };
  const handleHoverOff = () => {
    dispatch(setPlanetAnimation(true));
    dispatch(setPlanetOrbit({name:'experience', payload: false}));
  };

  return (
    <div
      className={`
        ${styles['orbit']}
        ${animation ? null : styles['pause']}
        ${hover ? styles['orbit-hover'] : null}
      `}
    >
      <section id='experience' className={styles['experience']}
        onMouseEnter = {handleHoverOn}
        onMouseLeave = {handleHoverOff}
      >
      </section>
    </div>
  );
};