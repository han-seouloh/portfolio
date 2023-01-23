import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets, setPlanet } from '../../store/planetsSlice';
import styles from './CurrentProjects.module.css';


export const CurrentProjects = () => {
  const dispatch = useDispatch();
  const { planets } = useSelector(selectPlanets);
  const visibility = planets.projects.visibility;
  const animation = planets.projects.animation;

  return (
    <div className={styles['orbit']}>
      <section className={visibility ? styles['currentprojects'] : styles['hide']}>
      </section>
    </div>
  );
};