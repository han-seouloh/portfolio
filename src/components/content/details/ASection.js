import { HiChevronUp, HiChevronDown } from 'react-icons/hi';
import { MdLocationPin } from 'react-icons/md';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { IoIosMail } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlanets } from '../../../store/planetsSlice';
import { handleAbout, setActive, selectSections } from '../../../store/sectionsSlice';
import styles from './ASection.module.css';

export const ASection = () => {
  const dispatch  = useDispatch();
  const { planets } = useSelector(selectPlanets);
  const { about, active } = useSelector(selectSections);
  const { welcome, intro, interests, values, hobbies, contact } = about;
  const view = planets.about.view;

  const handlePrev = () => {
    dispatch(handleAbout('down'));
    dispatch(setActive());
  };
  const handleNext = () => {
    dispatch(handleAbout('up'));
    dispatch(setActive());
  };

  return (
    <section className={styles.main}>
      <div
        className={
          `${styles.title}
          ${active ? styles['title-active'] : null}`
        }
      >
        <h2>ABOUT ME</h2>
      </div>
      <div
        className={
          `${view ? styles.details : styles['details-hide']}
          ${active ? styles['details-active'] : null}`
        }
      >
        <div className={styles['content-slider']} onClick={handlePrev}>
          <HiChevronUp />
        </div>
        <div className={styles['content-limiter']}>
        <div 
            className={`
              ${styles.slide}
              ${welcome < 1
                ? styles.prev 
                : welcome > 1
                ? styles.next
                : null
              }
            `}
          >
            <h3>Welcome</h3>
            <p>
            Welcome to my portfolio! Here, you can browse through the projects I have 
            developed to enhance my skills as a developer. Whether it's building web 
            applications, designing user interfaces, or exploring new technologies, I'm 
            passionate about pushing my limits and creating meaningful solutions. Take a 
            look at my work and feel free to contact me with any questions or feedback.
            </p>
          </div>
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
              During the later stages of the pandemic I started tinkering with Python
              focusing on data manipulation and analysis. After a year or so I started
              delving into Javascript and web development and I have grown fond of the
              programming world and its endless possibilities ever since.
            </p>
          </div>
          <div
            className={`
              ${styles.slide}
              ${interests < 1
                ? styles.prev 
                : interests > 1
                ? styles.next
                : null
              }
            `}
          >
            <h3>Professional Development</h3>
            <p>
              Staying up to date with the forefront of this ever-changing industry
              and learning ways to write better and more efficient code is
              what keeps me passionate about and interested in this career path.
            </p>
            <p className={styles.indent}>
              In addition to web development, I also explore and study other areas of 
              the programming industry as a hobby. As a lifelong learner, I'm always 
              looking for new challenges and opportunities to expand my skillset and 
              stay up-to-date with the latest trends and technologies.
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
              As a programmer, I understand that there is always something new to learn from every individual 
              since each has their own unique thought process that can bring new and creative solutions to problems. 
            </p>
            <p className={styles.indent}>
              I value collaboration and teamwork, and I am always eager to share information and knowledge 
              with others to help improve the effectiveness and productivity of the team as a whole. By 
              fostering a culture of learning and mutual support, we can achieve great things and create 
              innovative solutions to complex challenges.
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
            <ul className={styles.list}>
              <li>
                <h4>Music:</h4>
                <p>Singing</p>
                <p>Instruments</p>
              </li>
              <li>
                <h4>Health:</h4>
                <p>Gym</p>
                <p>Basketball</p>
              </li>
              <li>
                <h4>Technology:</h4>
                <p>Tinkering with electronics</p>
                <p>Learning to program in other areas of the industry</p>
              </li>
            </ul>
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
            <p className={styles['icon-text']}>
              <MdLocationPin style={{color: 'red'}} className={styles.icon}/>
              Guadalajara, Jalisco, Mexico
            </p>
            <p className={styles['icon-text']}>
              <IoIosMail style={{color: 'white'}} className={styles.icon}/>
              kwunchanin@gmail.com
            </p>
            <div className={styles.icons}>
              <a 
                href='https://www.linkedin.com/in/kwunchanin/' 
                target='_blank' 
                rel='noreferrer'
              >
                <SiLinkedin className={styles.icon}/>
              </a>
              <a 
                href='https://github.com/han-seouloh' 
                target='_blank' 
                rel='noreferrer'
              >
                <SiGithub className={styles.icon}/>
              </a>
            </div>
          </div>
        </div>
        <div className={styles['content-slider']} onClick={handleNext}>
          <HiChevronDown />
        </div>
      </div>
    </section>
  );
}