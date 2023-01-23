import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets, setPlanetAnimation, setPlanetOrbit } from '../../store/planetsSlice';
import { Projects } from '../projects/Projects';
import { Experience } from '../experience/Experience';
import styles from './About.module.css';

export const About = () => {
  const dispatch = useDispatch();
  const { planets } = useSelector(selectPlanets);
  const animation = planets.about.animation;
  const hover = planets.about.hover;

  const handleHoverOn = () => {
    dispatch(setPlanetAnimation(false));
    dispatch(setPlanetOrbit({name:'about', payload: true}));
  };
  const handleHoverOff = () => {
    dispatch(setPlanetAnimation(true));
    dispatch(setPlanetOrbit({name:'about', payload: false}));
  };

  return (
    <div
      className={`
        ${styles['orbit']}
        ${animation ? null : styles['pause']}
        ${hover ? styles['orbit-hover'] : null}
      `}
    >
      <Projects />
      <section className={styles['about']}
        onMouseEnter = {handleHoverOn}
        onMouseLeave = {handleHoverOff}
      >
      </section>
      <Experience />
    </div>
  );
};