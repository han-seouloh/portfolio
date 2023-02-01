import { useSelector } from 'react-redux';
import { selectPlanets} from './store/planetsSlice';

/*Components*/
import { About } from './components/about/About';
import { Preview } from './components/preview/Preview';

/*Styles*/
import styles from './App.module.css';

function App() {
  const { planets } = useSelector(selectPlanets);
  const focus = planets.about.focus;

  return (
    <div className={styles.app}>
      <div className={`${focus ? styles['planets-div-focus'] : styles['planets-div']}`}>
        <About />
      </div>
      <div className={`${focus ? styles['info-div-focus'] : styles['info-div']}`}>
        <Preview />
      </div>
    </div>
  );
}

export default App;
