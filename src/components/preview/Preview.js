import { useDispatch, useSelector } from 'react-redux';
import { selectInfo } from '../../store/infoSlice';
import { resetPlanets, selectPlanets } from '../../store/planetsSlice';
import { CgClose } from 'react-icons/cg';
import styles from './Preview.module.css';
import { resetClicks } from '../../store/clicksSlice';

export const Preview = () => {
  const dispatch = useDispatch();
  const { planets, selection } = useSelector(selectPlanets);
  const { previews } = useSelector(selectInfo);
  const heading = previews[selection].heading;
  const body = previews[selection].body;
  const focus = planets[selection].focus;

  const handleClick = () => {
    dispatch(resetClicks());
    dispatch(resetPlanets());
  }

  return (
    <aside className={focus ? styles.preview : styles.hidden}>
      {focus && <CgClose className={styles.close} onClick={handleClick} />}
      <h2 className={styles.heading}>{heading}</h2>
      <p className={focus ? styles.body : styles['hidden-body']}>{body}</p>
    </aside>
  );
};