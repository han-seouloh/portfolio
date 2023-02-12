import { useSelector } from 'react-redux';
import { selectPlanets} from './store/planetsSlice';

/*Components*/
import { About } from './components/about/About';
import { Preview } from './components/preview/Preview';
import { Help } from './components/help/Help';

/*Styles*/
import styles from './App.module.css';

function App() {
  const { planets, selection } = useSelector(selectPlanets);
  const focus = planets[selection].focus;

  return (
    <div
      className={styles.app}
    >
      <div className={`${focus ? styles['planets-div-focus'] : styles['planets-div']}`}>
        <About />
      </div>
      <div className={`${focus ? styles['info-div-focus'] : styles['info-div']}`}>
        <Preview />
      </div>
      <Help />
    </div>
  );
}

export default App;
