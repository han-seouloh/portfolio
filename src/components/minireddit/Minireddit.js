import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets, setPlanet } from '../../store/planetsSlice';
import styles from './Minireddit.module.css';

export const Minireddit = () => {
  const dispatch = useDispatch();
  const { planets } = useSelector(selectPlanets);
  const visibility = planets.minireddit.visibility;
  const animation = planets.minireddit.animation;

  return (
    <div className={styles['orbit']}>
      <section className={visibility ? styles['minireddit'] : styles['hide']}>
      </section>
    </div>
  );
};