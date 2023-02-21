import { useDispatch, useSelector } from 'react-redux';
import { CgClose } from 'react-icons/cg';
import { resetPlanets, selectPlanets } from '../../store/planetsSlice';
import styles from './Content.module.css';
import { resetClicks } from '../../store/clicksSlice';

export const Content = () => {
  const dispatch = useDispatch();
  const { planets, selection } = useSelector(selectPlanets);
  const view = planets[selection].view;

  const handleClick = () => {
    dispatch(resetPlanets());
    dispatch(resetClicks());
  };

  return (
    <main
      className={view ? styles['main-content'] : styles['main-content-hidden']}
    >

      <CgClose
        className={styles.close}
        onClick={handleClick}
      />
    </main>
  );
};