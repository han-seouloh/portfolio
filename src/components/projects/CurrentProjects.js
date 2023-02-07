import { useDispatch, useSelector } from 'react-redux';
import { selectClicks, setClickNum } from '../../store/clicksSlice';
import { selectPlanets, setPlanetAnimation, setPlanetFocus, setPlanetOrbit, setPlanetView, setSelection } from '../../store/planetsSlice';
import styles from './CurrentProjects.module.css';


export const CurrentProjects = () => {
  const dispatch = useDispatch();
  const { planets, selection } = useSelector(selectPlanets);
  const { clicks } = useSelector(selectClicks);
  const click = clicks.current;
  const focus = planets.current.focus;
  const view = planets.current.view;
  const otherView = selection !== 'current' ? planets[selection].view : null;

  const handleHoverOn = () => {
    dispatch(setPlanetAnimation(false));
    dispatch(setPlanetOrbit({name: 'current', payload: true}));
  };
  const handleHoverOff = () => {
    dispatch(setPlanetAnimation(true));
    dispatch(setPlanetOrbit({name: 'current', payload: false}));
  };
  const handleClick = () => {
    switch (click) {
      case 0:
        dispatch(setPlanetFocus({name:'current', payload: true}));
        dispatch(setPlanetAnimation(true));
        dispatch(setSelection('current'))
        dispatch(setClickNum({name:'current', clickNum: 1}));
        break;
      case 1:
        dispatch(setPlanetFocus({name:'current', payload: false}));
        dispatch(setPlanetView({name:'current', payload: true}));
        dispatch(setPlanetAnimation(true));
        dispatch(setClickNum({name:'current', clickNum: 2}));
        break;
      case 2:
        dispatch(setPlanetView({name:'current', payload: false}));
        dispatch(setPlanetAnimation(true));
        dispatch(setPlanetOrbit({name:'current', payload: false}));
        dispatch(setClickNum({name:'current', clickNum: 0}));
        break;
      default:
        dispatch(setClickNum({name:'current', clickNum: 0}));
        break; 
    };
  };


  return (
      <section
        className={`
          ${styles['current']}
          ${focus ? styles['current-focus'] : null}
          ${view ? styles['current-view'] : null}
        `}
        style={ otherView ? {'zIndex': 0, transition: 'all 0.5s linear, z-index 0s step-start'} : {transition: 'all 0.5s linear, z-index 1s step-end'}}
        onMouseEnter = {handleHoverOn}
        onMouseLeave = {handleHoverOff}
        onClick = {handleClick}
      >
      </section>
  );
};