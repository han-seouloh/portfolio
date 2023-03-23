import {ScrollDown} from '../../scrolldown/ScrollDown';
import { SiBootstrap, SiCss3, SiExpress, SiHtml5, SiJavascript, SiJquery, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiRedux, SiSass} from 'react-icons/si';
import styles from './ESection.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { resetScroll, setScroll } from '../../../store/scrollSlice';

export const ESection = () => {
  const dispatch = useDispatch();
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState('');
  const portrait = window.matchMedia("(orientation: portrait)").matches;
  let iconName = document.getElementById('icon-name');

  const handleScroll = ( {target} ) => {
    const newScroll = target.scrollTop;

    if (scrollY > newScroll) {
      setDirection('up');
      setScrollY(newScroll);
    } else {
      setDirection('down');
      setScrollY(newScroll);
    };

    if (newScroll === 0) {
      dispatch(resetScroll());
    } else {
      dispatch(setScroll());
    }

    if (portrait) {
      if (direction === 'down') {
        target.parentElement.children[0].classList.add(styles['title-scroll']);
        target.classList.add(styles['details-scroll']);
        iconName.innerHTML = '';
      } else {
        target.parentElement.children[0].classList.remove(styles['title-scroll']);
        target.classList.remove(styles['details-scroll']);
        iconName.innerHTML = '';
      }
    };
  };

  const handleHTML = ( ) => {
    iconName.innerHTML = 'HTML';
  };
  const handleCSS = ( ) => {
    iconName.innerHTML = 'CSS';
  };
  const handleJavascript = ( ) => {
    iconName.innerHTML = 'JavaScript';
  };
  const handleReact = ( ) => {
    iconName.innerHTML = 'React';
  };
  const handleRedux = ( ) => {
    iconName.innerHTML = 'Redux';
  };
  const handleJquery = ( ) => {
    iconName.innerHTML = 'JQuery';
  };
  const handleBoot = ( ) => {
    iconName.innerHTML = 'Bootstrap';
  };
  const handleNode = ( ) => {
    iconName.innerHTML = 'Node';
  };
  const handleSass = ( ) => {
    iconName.innerHTML = 'SASS';
  };
  const handlePython = ( ) => {
    iconName.innerHTML = 'Python';
  };
  const handleHide = () => {
    iconName.innerHTML = '';
  }

  return (
    <section className={styles.main}>
      <div className={styles.title}>
        <h2>EXPERIENCE</h2>
        <h2>& STACK</h2>
      </div>
      <div className={styles.details} onScroll={handleScroll}>
          <div className={styles.section}>
            <h3>Stack</h3>
            <div className={styles.icons} onMouseLeave={handleHide}>
              <SiHtml5 className={styles.icon} onMouseEnter={handleHTML}/>
              <SiCss3 className={styles.icon} onMouseEnter={handleCSS}/>
              <SiJavascript className={styles.icon} onMouseEnter={handleJavascript}/>
              <SiReact className={styles.icon} onMouseEnter={handleReact}/>
              <SiRedux className={styles.icon} onMouseEnter={handleRedux}/>
              <SiJquery className={styles.icon} onMouseEnter={handleJquery}/>
              <SiBootstrap className={styles.icon} onMouseEnter={handleBoot}/>
              <SiNodedotjs className={styles.icon} onMouseEnter={handleNode}/>
              <SiSass className={styles.icon} onMouseEnter={handleSass}/>
              <SiPython className={styles.icon} onMouseEnter={handlePython}/>
            </div>
            <p id='icon-name' className={styles['icon-name']}></p>
            <ScrollDown />
          </div>
          <div className={styles.section}>
            <h3>Stack (Learning)</h3>
            <div className={styles['icons-2']}>
              <SiExpress />
              <SiPostgresql />
            </div>
            <ul className={styles.list}>
              <p className={styles.brief}>
                These are the languages, frameworks, libraries, and technologies I'm currently 
                learning to become a Full-Stack developer. In the future, I plan to learn MongoDB 
                and ThreeJS to further expand my backend development skills and increase my frontend 
                development arsenal.
              </p>
              <li>
                <h4>ExpressJS</h4>
              </li>
              <li>
                <h4>PostgreSQL</h4>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3>Education</h3>
            <ul className={styles.list}>
              <li>
                <h4>BS in Mechanical Engineering with Minor in Industrial Engineering</h4>
                <p>Tecnológico de Monterrey (ITESM)</p>
                <p>Graduated with Honors</p>
              </li>
              <li>
                <h4>Something</h4>
                <p></p>
              </li>
              <li>
                <h4>Something</h4>
                <p></p>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3>Experience</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
              occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={styles.section}>
            <h3>Other Notable Skills</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
              occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
            </p>
          </div>
      </div>
    </section>
  );
}