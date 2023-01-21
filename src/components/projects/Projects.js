import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets, setPlanet } from '../../store/planetsSlice';
import { Minireddit } from '../minireddit/Minireddit';
import { Tanaka } from '../tanaka/Tanaka';
import styles from './Projects.module.css';


export const Projects = () => {
  const dispatch = useDispatch();
  const { planets } = useSelector(selectPlanets);
  const visibility = planets.projects.visibility;
  const animation = planets.projects.animation;

  return (
    <div className={styles['orbit']}>
      <section className={visibility ? styles['projects'] : styles['hide']}>
      </section>
      <Minireddit />
      <Tanaka />
    </div>
  );
};