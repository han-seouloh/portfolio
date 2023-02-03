import { useSelector } from 'react-redux';
import { selectInfo } from '../../store/infoSlice';
import { selectPlanets } from '../../store/planetsSlice';
import styles from './Preview.module.css';

export const Preview = () => {
  const { planets, selection } = useSelector(selectPlanets);
  const { previews } = useSelector(selectInfo);
  const heading = previews[selection].heading;
  const body = previews[selection].body;
  const focus = planets[selection].focus;

  return (
    <aside className={focus ? styles.preview : styles.hidden}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={focus ? styles.body : styles['hidden-body']}>{body}</p>
    </aside>
  );
};