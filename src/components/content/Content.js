import { useDispatch, useSelector } from 'react-redux';
import { CgClose } from 'react-icons/cg';
import { resetPlanets, selectPlanets } from '../../store/planetsSlice';
import styles from './Content.module.css';
import { resetClicks } from '../../store/clicksSlice';
import {ASection} from './details/ASection';
import {ESection} from './details/ESection';
import {CSection} from './details/CSection';
import {PSection} from './details/PSection';
import {MSection} from './details/MSection';
import {TSection} from './details/TSection';

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
      {(view && selection === 'about') && <ASection />}
      {(view && selection === 'experience') && <ESection />}
      {(view && selection === 'projects') && <  PSection />}
      {(view && selection === 'current') && <CSection />}
      {(view && selection === 'minireddit') && <MSection />}
      {(view && selection === 'tanaka') && <TSection />}
      <CgClose
        className={styles.close}
        onClick={handleClick}
      />
    </main>
  );
};