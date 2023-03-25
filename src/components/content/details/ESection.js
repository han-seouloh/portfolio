import {ScrollDown} from '../../scrolldown/ScrollDown';
import { SiBootstrap, SiCss3, SiExpress, SiGit, SiHtml5, SiJavascript, SiJquery, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiRedux, SiSass, SiTypescript} from 'react-icons/si';
import styles from './ESection.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { resetScroll, setScroll } from '../../../store/scrollSlice';

export const ESection = () => {
  const dispatch = useDispatch();
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState('');
  const [iconName, setIconName] = useState('Hover Over The Icons');
  const [secondIconName, setSecondIconName] = useState('Hover Over The Icons');
  const portrait = window.matchMedia("(orientation: portrait)").matches;

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
        setIconName('Hover Over The Icons');
        setSecondIconName('Hover Over The Icons');
      } else {
        target.parentElement.children[0].classList.remove(styles['title-scroll']);
        target.classList.remove(styles['details-scroll']);
        setIconName('Hover Over The Icons');
        setSecondIconName('Hover Over The Icons');
      }
    };
  };

  const iconsArray = [
    ['html', <SiHtml5 />],
    ['css', <SiCss3 />],
    ['javascript', <SiJavascript />],
    ['react', <SiReact />],
    ['redux', <SiRedux />],
    ['git', <SiGit />],
    ['python', <SiPython />],
    ['node', <SiNodedotjs />],
    ['jquery', <SiJquery />],
    ['bootstrap', <SiBootstrap />],
    ['sass', <SiSass />]
  ];

  const secondIconsArray = [
    ['expressjs', <SiExpress />],
    ['postgresql', <SiPostgresql />],
    ['typescript', <SiTypescript />],
  ];

  const handleHide = () => {
    setIconName('Hover Over The Icons');
  }
  const handleSecondHide = () => {
    setSecondIconName('Hover Over The Icons');
  }

  return (
    <section className={styles.main}>
      <div className={styles.title}>
        <h2>EDUCATION</h2>
        <h2>& STACK</h2>
      </div>
      <div className={styles.details} onScroll={handleScroll}>
          <div className={styles.section}>
            <h3>Stack</h3>
            <div className={styles.icons} onMouseLeave={handleHide}>
              {iconsArray.map( icon => (
                <div 
                  key={icon[0]}
                  className={styles.icon} 
                  onMouseEnter={() => {
                    setIconName(icon[0]);
                  }}
                >
                  {icon[1]}
                </div>
              ))}
            </div>
            <p 
              id='icon-name'
              className={`
                ${styles['icon-name']}
                ${
                  iconName === 'Hover Over The Icons'
                  ? styles.blink
                  : null
                }
              `}
            >
              {iconName}
            </p>
            <ScrollDown />
          </div>
          <div className={styles.section} >
            <h3>Stack (Learning)</h3>
            <div className={styles['icons-2']} onMouseLeave={handleSecondHide}>
              {secondIconsArray.map(icon => (
                <div 
                  key={icon[0]}
                  className={styles.icon} 
                  onMouseEnter={() => {
                    setSecondIconName(icon[0]);
                  }}
                >
                  {icon[1]}
                </div>
              ))}
            </div>
            <p className={styles.brief}>
              These are the languages, frameworks, libraries, and technologies I'm currently 
              learning to become a Full-Stack developer. In the future, I plan to learn MongoDB 
              and ThreeJS to further expand my backend development skills and increase my frontend 
              development arsenal.
            </p>
            <p 
              id='icon-name'
              className={`
                ${styles['icon-name']}
                ${
                  secondIconName === 'Hover Over The Icons'
                  ? styles.blink
                  : null
                }
              `}
            >
              {secondIconName}
            </p>
          </div>
          <div className={styles.section}>
            {/*'**Future Update: Timeline animation with scroll input**'*/}
            <h3>Education</h3>
            <ul className={styles.list}>
              <li>
                <h4>Full-Stack Career Path</h4>
                <p>Codecademy</p>
                <p>2022 - Present</p>
              </li>
              <li>
                <h4>Front End Development</h4>
                <p>FreeCodeCamp</p>
              </li>
              <li>
                <h4>BS in Mechanical Engineering with Minor in Industrial Engineering</h4>
                <p>Tecnológico de Monterrey (ITESM)</p>
                <p>Graduated with Honors</p>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3>Other Noteworthy Skills</h3>
            <ul className={styles.list}>
              <li>
                <h4>Language Skills:</h4>
                <p>English</p>
                <p>Spanish</p>
                <p>Korean</p>
                <p>Japanese</p>
                <p>Chinese</p>
              </li>
              <li>
                <h4>3D Modeling</h4>
                <p>SolidWorks</p>
                <p>Blender</p>
              </li>
              <li>
                <h4>Other Skills:</h4>
                <p>Project Management</p>
                <p>SCRUM & AGILE</p>
              </li>
            </ul>
          </div>
      </div>
    </section>
  );
}