import { HiChevronUp, HiChevronDown } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets } from '../../../store/planetsSlice';
import { handleAbout, selectSections } from '../../../store/sectionsSlice';
import styles from './ASection.module.css';

export const ASection = () => {
  const dispatch  = useDispatch();
  const { planets } = useSelector(selectPlanets);
  const { about } = useSelector(selectSections);
  const { intro, values, hobbies, contact } = about;
  const view = planets.about.view;

  const handlePrev = () => {
    dispatch(handleAbout('down'));
  };
  const handleNext = () => {
    dispatch(handleAbout('up'));
  };

  return (
    <section className={styles.main}>
      <div className={styles.title}>
        <h2>ABOUT ME</h2>
      </div>
      <div className={view ? styles.details : styles['details-hide']}>
        <div className={styles['content-slider']} onClick={handlePrev}>
          <HiChevronUp />
        </div>
        <div className={styles['content-limiter']}>
          <div 
            className={`
              ${styles.slide}
              ${intro < 1
                ? styles.prev 
                : intro > 1
                ? styles.next
                : null
              }
            `}
          >
            <h3>Introduction</h3>
            <p>
              Hi! My name is Chan In Kwun <span>(pseud. Han Seoul Oh, a korean twist
              on the fictional character Han Solo)</span>. I am a mechanical engineer
              with a minor in industrial engineering turned front-end engineer and
              soon-to-be full-stack engineer.
            </p>
            <p className={styles.indent}>
              During the later stages of the pandemic I had a sudden brainwave and 
              started tinkering with Python focusing on data manipulation and analysis.
              After a year or so I started delving into Javascript and web development.
            </p>
          </div>
          <div
            className={`
              ${styles.slide}
              ${values < 1
                ? styles.prev 
                : values > 1
                ? styles.next
                : null
              }
            `}
          >
            <h3>Ideology <br/> and Values</h3>
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
          <div 
            className={`
              ${styles.slide}
              ${hobbies < 1
                ? styles.prev 
                : hobbies > 1
                ? styles.next
                : null
              }
            `}
          >
            <h3>Hobbies</h3>
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
          <div 
            className={`
              ${styles.slide}
              ${contact < 1
                ? styles.prev 
                : contact > 1
                ? styles.next
                : null
              }
            `}
          >
            <h3>Contact</h3>
            <p>
              Lorem dolor sit amet, consectetur adipiscing elit, 
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
        <div className={styles['content-slider']} onClick={handleNext}>
          <HiChevronDown />
        </div>
      </div>
    </section>
  );
}