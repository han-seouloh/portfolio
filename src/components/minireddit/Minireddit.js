import { useDispatch, useSelector } from 'react-redux';
import { selectClicks, setClickNum } from '../../store/clicksSlice';
import { selectPlanets, setPlanetAnimation, setPlanetFocus, setPlanetOrbit, setPlanetView, setSelection } from '../../store/planetsSlice';
import styles from './Minireddit.module.css';

export const Minireddit = () => {
  const dispatch = useDispatch();
  const { planets } = useSelector(selectPlanets);
  const { clicks } = useSelector(selectClicks);
  const click = clicks.minireddit;
  const animation = planets.minireddit.animation;
  const hover = planets.minireddit.hover;
  const focus = planets.minireddit.focus;
  const view = planets.minireddit.view;
  const tanakaFocus = planets.tanaka.focus;
  const tanakaView = planets.tanaka.view;

  const handleHoverOn = () => {
    dispatch(setPlanetAnimation(false));
    dispatch(setPlanetOrbit({name: 'minireddit', payload: true}));
  };
  const handleHoverOff = () => {
    dispatch(setPlanetAnimation(true));
    dispatch(setPlanetOrbit({name: 'minireddit', payload: false}));
  };
  const handleClick = () => {
    switch (click) {
      case 0:
        dispatch(setPlanetFocus({name:'minireddit', payload: true}));
        dispatch(setPlanetAnimation(true));
        dispatch(setSelection('minireddit'))
        dispatch(setClickNum({name:'minireddit', clickNum: 1}));
        break;
      case 1:
        dispatch(setPlanetFocus({name:'minireddit', payload: false}));
        dispatch(setPlanetView({name:'minireddit', payload: true}));
        dispatch(setPlanetAnimation(true));
        dispatch(setClickNum({name:'minireddit', clickNum: 2}));
        break;
      case 2:
        dispatch(setPlanetView({name:'minireddit', payload: false}));
        dispatch(setPlanetAnimation(true));
        dispatch(setPlanetOrbit({name:'minireddit', payload: false}));
        dispatch(setClickNum({name:'minireddit', clickNum: 0}));
        break;
      default:
        dispatch(setClickNum({name:'minireddit', clickNum: 0}));
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
        tanakaFocus
        ? {zIndex: -1, transition: 'z-index 0s step-start'}
        : tanakaView
        ? {'visibility': 'collapse', transition: 'all 0.5s linear, visibility 0s step-start'} 
        : {transition: 'all 0.5s linear, visibility 0.5s step-end'}
      }
    >
      <section 
        className={`
          ${styles['minireddit']}
          ${focus ? styles['minireddit-focus'] : null}
          ${view ? styles['minireddit-view'] : null}
        `}
        onMouseEnter = {handleHoverOn}
        onMouseLeave = {handleHoverOff}
        onClick = {handleClick}
      >
      </section>
    </div>
  );
};