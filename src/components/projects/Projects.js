import { useDispatch, useSelector } from 'react-redux';
import { selectClicks, setClickNum } from '../../store/clicksSlice';
import { selectPlanets, setPlanetAnimation, setPlanetFocus, setPlanetOrbit, setPlanetView, setSelection } from '../../store/planetsSlice';
import { Minireddit } from '../minireddit/Minireddit';
import { Tanaka } from '../tanaka/Tanaka';
import { CurrentProjects } from './CurrentProjects';
import styles from './Projects.module.css';


export const Projects = () => {
  const dispatch = useDispatch();
  const { planets, selection } = useSelector(selectPlanets);
  const { clicks } = useSelector(selectClicks);
  const click = clicks.projects;
  const animation = planets.projects.animation;
  const projectsHover = planets.projects.hover;
  const currentHover = planets.current.hover;
  const focus = planets.projects.focus;
  const currentFocus = planets.current.focus;
  const view = planets.projects.view;
  const otherView = selection !== 'projects' ? planets[selection].view : null;

  const handleHoverOn = () => {
    dispatch(setPlanetAnimation(false));
    dispatch(setPlanetOrbit({name:'projects', payload: true}));
  };
  const handleHoverOff = () => {
    dispatch(setPlanetAnimation(true));
    dispatch(setPlanetOrbit({name:'projects', payload: false}));
  };
  const handleClick = () => {
    switch (click) {
      case 0:
        dispatch(setPlanetFocus({name:'projects', payload: true}));
        dispatch(setPlanetAnimation(true));
        dispatch(setSelection('projects'))
        dispatch(setClickNum({name:'projects', clickNum: 1}));
        break;
      case 1:
        dispatch(setPlanetFocus({name:'projects', payload: false}));
        dispatch(setPlanetView({name:'projects', payload: true}));
        dispatch(setPlanetAnimation(true));
        dispatch(setClickNum({name:'projects', clickNum: 2}));
        break;
      case 2:
        dispatch(setPlanetView({name:'projects', payload: false}));
        dispatch(setPlanetAnimation(true));
        dispatch(setPlanetOrbit({name:'projects', payload: false}));
        dispatch(setClickNum({name:'projects', clickNum: 0}));
        break;
      default:
        dispatch(setClickNum({name:'projects', clickNum: 0}));
        break; 
    };
  };

  return (
    <div
      className={`
        ${styles['orbit']}
        ${animation ? null : styles['pause']}
        ${projectsHover || focus ? styles['orbit-hover-projects'] : null}
        ${currentHover || currentFocus ? styles['orbit-hover-current'] : null}
      `}
    >
      <section 
        className={`
          ${styles['projects']}
          ${focus ? styles['projects-focus'] : null}
          ${view ? styles['projects-view'] : null}
        `}
        style={ otherView ? {'zIndex': 0, transition: 'all 0.5s linear, z-index 0s step-start'} : {transition: 'all 0.5s linear, z-index 1s step-end'}}
        onMouseEnter = {handleHoverOn}
        onMouseLeave = {handleHoverOff}
        onClick = {handleClick}
      >
      </section>
      <CurrentProjects />
      <Tanaka />
      <Minireddit />
    </div>
  );
};