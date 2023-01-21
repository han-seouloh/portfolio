import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets, setPlanet } from '../../store/planetsSlice';
import styles from './Experience.module.css';

export const Experience = () => {
  const dispatch = useDispatch();
  const { planets } = useSelector(selectPlanets);
  const visibility = planets.experience.visibility;
  const animation = planets.experience.animation;

  return (
    <div className={styles['orbit']}>
      <section className={visibility ? styles['experience'] : styles['hide']}>
      </section>
    </div>
  );
};