import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets, setPlanetAnimation, setPlanetOrbit } from '../../store/planetsSlice';
import styles from './CurrentProjects.module.css';


export const CurrentProjects = () => {
  const dispatch = useDispatch();
  const { planets } = useSelector(selectPlanets);

  const handleHoverOn = () => {
    dispatch(setPlanetAnimation(false));
    dispatch(setPlanetOrbit({name: 'current', payload: true}));
  };
  const handleHoverOff = () => {
    dispatch(setPlanetAnimation(true));
    dispatch(setPlanetOrbit({name: 'current', payload: false}));
  };

  return (
      <section className={styles['currentprojects']}
        onMouseEnter = {handleHoverOn}
        onMouseLeave = {handleHoverOff}
      >
      </section>
  );
};