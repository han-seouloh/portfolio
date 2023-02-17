import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets, setPlanetAnimation, setPlanetFocus, setPlanetOrbit, setPlanetView, setSelection } from '../../store/planetsSlice';
import { Projects } from '../projects/Projects';
import { Experience } from '../experience/Experience';
import styles from './About.module.css';
import { selectClicks, setClickNum } from '../../store/clicksSlice';

export const About = () => {
  const dispatch = useDispatch();
  const { planets, selection } = useSelector(selectPlanets);
  const { clicks } = useSelector(selectClicks);
  const click = clicks.about;
  const animation = planets.about.animation;
  const hover = planets.about.hover;
  const focus = planets.about.focus;
  const view = planets.about.view;
  const expFocus = planets.experience.focus;
  const otherView = selection !== 'about' ? planets[selection].view : null;

  const handleHoverOn = () => {
    dispatch(setPlanetAnimation(false));
    dispatch(setPlanetOrbit({name:'about', payload: true}));
  };
  const handleHoverOff = () => {
    dispatch(setPlanetAnimation(true));
    dispatch(setPlanetOrbit({name:'about', payload: false}));
  };
  const handleClick = () => {
    switch (click) {
      case 0:
        dispatch(setPlanetFocus({name:'about', payload: true}));
        dispatch(setPlanetAnimation(true));
        dispatch(setSelection('about'));
        dispatch(setClickNum({name:'about', clickNum: 1}));
        break;
      case 1:
        dispatch(setPlanetFocus({name:'about', payload: false}));
        dispatch(setPlanetView({name:'about', payload: true}));
        dispatch(setPlanetAnimation(true));
        dispatch(setClickNum({name:'about', clickNum: 2}));
        break;
      case 2:
        dispatch(setPlanetView({name:'about', payload: false}));
        dispatch(setPlanetAnimation(true));
        dispatch(setPlanetOrbit({name:'about', payload: false}));
        dispatch(setClickNum({name:'about', clickNum: 0}));
        break;
      default:
        dispatch(setClickNum({name:'about', clickNum: 0}));
        break; 
    };
  };

  return (
    <div
      className={`
        ${styles['orbit']}
        ${animation ? null : styles['pause']}
        ${hover || focus ? styles['orbit-hover'] : null}
      `}
    >
      <Projects />
      <section 
        className={`
          ${styles['about']}
          ${focus ? styles['about-focus'] : null}
          ${view ? styles['about-view'] : null}
        `}
        style={ 
          expFocus || otherView 
          ? {'visibility': 'collapse', transition: 'all 0.5s linear, visibility 1s step-start'} 
          : {transitionProperty: 'all 0.5s linear, visibility 1s step-end'}
        }
        onMouseEnter = {handleHoverOn}
        onMouseLeave = {handleHoverOff}
        onClick = {handleClick}
      >
      </section>
      <Experience />
    </div>
  );
};