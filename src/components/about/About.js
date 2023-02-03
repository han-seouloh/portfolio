import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets, setPlanetAnimation, setPlanetFocus, setPlanetOrbit, setPlanetView, setSelection } from '../../store/planetsSlice';
import { Projects } from '../projects/Projects';
import { Experience } from '../experience/Experience';
import styles from './About.module.css';
import { selectClicks, setClickNum } from '../../store/clicksSlice';

export const About = () => {
  const dispatch = useDispatch();
  const { planets, selection } = useSelector(selectPlanets);
  const { clickNum } = useSelector(selectClicks);
  const animation = planets.about.animation;
  const hover = planets.about.hover;
  const focus = planets.about.focus;
  const view = planets.about.view;
  const expFocus = selection !== 'about' ? planets[selection].focus : null;
  const expView = selection !== 'about' ? planets[selection].view : null;

  const handleHoverOn = () => {
    dispatch(setPlanetAnimation(false));
    dispatch(setPlanetOrbit({name:'about', payload: true}));
  };
  const handleHoverOff = () => {
    dispatch(setPlanetAnimation(true));
    dispatch(setPlanetOrbit({name:'about', payload: false}));
  };
  const handleClick = () => {
    switch (clickNum) {
      case 0:
        dispatch(setPlanetFocus({name:'about', payload: true}));
        dispatch(setPlanetAnimation(true));
        dispatch(setSelection('about'));
        dispatch(setClickNum(1));
        break;
      case 1:
        dispatch(setPlanetFocus({name:'about', payload: false}));
        dispatch(setPlanetView({name:'about', payload: true}));
        dispatch(setPlanetAnimation(true));
        dispatch(setClickNum(2));
        break;
      case 2:
        dispatch(setPlanetView({name:'about', payload: false}));
        dispatch(setPlanetAnimation(true));
        dispatch(setPlanetOrbit({name:'about', payload: false}));
        dispatch(setClickNum(0));
        break;
      default:
        dispatch(setClickNum(0));
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
        style={expFocus || expView ? {'zIndex': 0} : null}
        onMouseEnter = {handleHoverOn}
        onMouseLeave = {handleHoverOff}
        onClick = {handleClick}
      >
      </section>
      <Experience />
    </div>
  );
};