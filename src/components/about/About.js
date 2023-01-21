import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets, setPlanet } from '../../store/planetsSlice';
import { Experience } from '../experience/Experience';
import styles from './About.module.css';

export const About = () => {
  const dispatch = useDispatch();
  const { planets } = useSelector(selectPlanets);
  const visibility = planets.about.visibility;
  const animation = planets.about.animation;

  return (
    <div className={styles['orbit']}>
      <section className={visibility ? styles['about'] : styles['hide']}>
      </section>
      <Experience />
    </div>
  );
};