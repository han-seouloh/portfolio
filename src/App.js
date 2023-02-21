import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets, setPlanetFocus, setSelection} from './store/planetsSlice';

/*Components*/
import { About } from './components/about/About';
import { Preview } from './components/preview/Preview';
import { Help } from './components/help/Help';

/*Styles*/
import styles from './App.module.css';
import { useState } from 'react';
import { setClickNum } from './store/clicksSlice';
import { Content } from './components/content/Content';

function App() {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const { planets, selection } = useSelector(selectPlanets);
  const focus = planets[selection].focus;
  const view = planets[selection].view;

  const handleClick = () => {
    dispatch(setClickNum({name: 'about', clickNum: 1}));
    dispatch(setSelection('about'));
    dispatch(setPlanetFocus({name: 'about', payload: true}));
  };
  const handleHover = () => {
    if (hover) {
      setHover(false);
    } else {
      setHover(true);
    }
  };

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
      <div
        className={styles.name}
        style={view ? {display: 'none'} : null}
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <p>Chan In Kwun</p>
        <div className={hover ? styles['underline-move'] : styles.underline}></div>
      </div>
      <Content />
    </div>
  );
}

export default App;
