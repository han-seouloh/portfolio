import { useSelector } from 'react-redux';
import { selectInfo } from '../../store/infoSlice';
import { selectPlanets } from '../../store/planetsSlice';
import styles from './Preview.module.css';

export const Preview = () => {
  const { planets } = useSelector(selectPlanets);
  const { previews } = useSelector(selectInfo);
  const heading = previews['about'].heading;
  const body = previews['about'].body;
  const focus = planets.about.focus;

  return (
    <aside className={focus ? styles.preview : styles.hidden}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.body}>{body}</p>
    </aside>
  );
};