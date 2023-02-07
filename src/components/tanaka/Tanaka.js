import { useDispatch, useSelector } from 'react-redux';
import { selectClicks, setClickNum } from '../../store/clicksSlice';
import { selectPlanets, setPlanetAnimation, setPlanetFocus, setPlanetOrbit, setPlanetView, setSelection } from '../../store/planetsSlice';
import styles from './Tanaka.module.css';

export const Tanaka = () => {
  const dispatch = useDispatch();
  const { planets } = useSelector(selectPlanets);
  const { clicks } = useSelector(selectClicks);
  const click = clicks.tanaka;
  const animation = planets.tanaka.animation;
  const hover = planets.tanaka.hover;
  const focus = planets.tanaka.focus;
  const view = planets.tanaka.view;

  const handleHoverOn = () => {
    dispatch(setPlanetAnimation(false));
    dispatch(setPlanetOrbit({name:'tanaka', payload: true}));
  };
  const handleHoverOff = () => {
    dispatch(setPlanetAnimation(true));
    dispatch(setPlanetOrbit({name:'tanaka', payload: false}));
  };
  const handleClick = () => {
    switch (click) {
      case 0:
        dispatch(setPlanetFocus({name:'tanaka', payload: true}));
        dispatch(setPlanetAnimation(true));
        dispatch(setSelection('tanaka'))
        dispatch(setClickNum({name:'tanaka', clickNum: 1}));
        break;
      case 1:
        dispatch(setPlanetFocus({name:'tanaka', payload: false}));
        dispatch(setPlanetView({name:'tanaka', payload: true}));
        dispatch(setPlanetAnimation(true));
        dispatch(setClickNum({name:'tanaka', clickNum: 2}));
        break;
      case 2:
        dispatch(setPlanetView({name:'tanaka', payload: false}));
        dispatch(setPlanetAnimation(true));
        dispatch(setPlanetOrbit({name:'tanaka', payload: false}));
        dispatch(setClickNum({name:'tanaka', clickNum: 0}));
        break;
      default:
        dispatch(setClickNum({name:'tanaka', clickNum: 0}));
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
      <section
        className={`
        ${styles['tanaka']}
        ${focus ? styles['tanaka-focus'] : null}
        ${view ? styles['tanaka-view'] : null}
        `}
        onMouseEnter = {handleHoverOn}
        onMouseLeave = {handleHoverOff}
        onClick = {handleClick}
      >
      </section>
    </div>
  );
};