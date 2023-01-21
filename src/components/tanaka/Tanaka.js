import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets, setPlanet } from '../../store/planetsSlice';
import styles from './Tanaka.module.css';

export const Tanaka = () => {
  const dispatch = useDispatch();
  const { planets } = useSelector(selectPlanets);
  const visibility = planets.tanaka.visibility;
  const animation = planets.tanaka.animation;

  return (
    <div className={styles['orbit']}>
      <section className={visibility ? styles['tanaka'] : styles['hide']}>
      </section>
    </div>
  );
};