import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets, setPlanetAnimation, setPlanetOrbit } from '../../store/planetsSlice';
import { Minireddit } from '../minireddit/Minireddit';
import { Tanaka } from '../tanaka/Tanaka';
import { CurrentProjects } from './CurrentProjects';
import styles from './Projects.module.css';


export const Projects = () => {
  const dispatch = useDispatch();
  const { planets } = useSelector(selectPlanets);
  const projectsHover = planets.projects.hover;
  const currentHover = planets.current.hover;

  const handleHoverOn = () => {
    dispatch(setPlanetAnimation(false));
    dispatch(setPlanetOrbit({name:'projects', payload: true}));
  };
  const handleHoverOff = () => {
    dispatch(setPlanetAnimation(true));
    dispatch(setPlanetOrbit({name:'projects', payload: false}));
  };

  return (
    <div
      className={`
        ${styles['orbit']}
        ${projectsHover ? styles['orbit-hover-projects'] : null}
        ${currentHover ? styles['orbit-hover-current'] : null}
      `}
    >
      <section className={styles['projects']}
        onMouseEnter = {handleHoverOn}
        onMouseLeave = {handleHoverOff}
      >
      </section>
      <CurrentProjects />
      <Tanaka />
      <Minireddit />
    </div>
  );
};