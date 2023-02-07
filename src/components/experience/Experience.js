import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets, setPlanetAnimation, setPlanetFocus, setPlanetOrbit, setPlanetView, setSelection } from '../../store/planetsSlice';
import { selectClicks, setClickNum } from '../../store/clicksSlice';
import styles from './Experience.module.css';

export const Experience = () => {
  const dispatch = useDispatch();
  const { planets, selection } = useSelector(selectPlanets);
  const { clicks } = useSelector(selectClicks);
  const click = clicks.experience;
  const animation = planets.experience.animation;
  const hover = planets.experience.hover;
  const focus = planets.experience.focus;
  const view = planets.experience.view;
  const otherFocus = selection === 'minireddit' || selection === 'tanaka' ? planets[selection].focus : null;
  const otherView = selection !== 'experience' ? planets[selection].view : null;


  const handleHoverOn = () => {
    dispatch(setPlanetAnimation(false));
    dispatch(setPlanetOrbit({name:'experience', payload: true}));
  };
  const handleHoverOff = () => {
    dispatch(setPlanetAnimation(true));
    dispatch(setPlanetOrbit({name:'experience', payload: false}));
  };
  const handleClick = () => {
    switch (click) {
      case 0:
        dispatch(setPlanetFocus({name:'experience', payload: true}));
        dispatch(setPlanetAnimation(true));
        dispatch(setSelection('experience'))
        dispatch(setClickNum({name:'experience', clickNum: 1}));
        break;
      case 1:
        dispatch(setPlanetFocus({name:'experience', payload: false}));
        dispatch(setPlanetView({name:'experience', payload: true}));
        dispatch(setPlanetAnimation(true));
        dispatch(setClickNum({name:'experience', clickNum: 2}));
        break;
      case 2:
        dispatch(setPlanetView({name:'experience', payload: false}));
        dispatch(setPlanetAnimation(true));
        dispatch(setPlanetOrbit({name:'experience', payload: false}));
        dispatch(setClickNum({name:'experience', clickNum: 0}));
        break;
      default:
        dispatch(setClickNum({name:'experience', clickNum: 0}));
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
      style={ 
        otherView 
        ? {'visibility': 'collapse', transition: 'visibility 0s step-start'} 
        : {transition: 'visibility 0.5s step-end'}
      }
    >
      <section 
        className={`
          ${styles['experience']}
          ${focus ? styles['experience-focus'] : null}
          ${view ? styles['experience-view'] : null}
        `}
        onMouseEnter = {handleHoverOn}
        onMouseLeave = {handleHoverOff}
        onClick = {handleClick}
      >
      </section>
    </div>
  );
};