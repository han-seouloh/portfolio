import { useState } from 'react';
import video1 from '../../../resources/videos/portfolio/portfolio-hover.mp4';
import video2 from '../../../resources/videos/portfolio/portfolio-planets.mp4';
import video3 from '../../../resources/videos/portfolio/portfolio-help.mp4';
import video4 from '../../../resources/videos/portfolio/portfolio-content.mp4';
import styles from './CSection.module.css';

export const CSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState('');
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

    if (portrait) {
      if (direction === 'down') {
        target.parentElement.children[0].classList.add(styles['title-scroll']);
        target.classList.add(styles['details-scroll']);
      } else {
        target.parentElement.children[0].classList.remove(styles['title-scroll']);
        target.classList.remove(styles['details-scroll']);
      }
    };
  };

  return (
    <section className={styles.main}>
      <div className={styles.title}>
        <div>
          <h2>CURRENT</h2>
          <h2>PROJECTS</h2>
        </div>
      </div>
      <div className={styles.details} onScroll={handleScroll}>
        <div className={styles.section}>
          <h3>Description</h3>
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
          <h3>Something</h3>
          <div className={styles['video-wrapper']}>
            <video autoPlay loop width={'101%'}>
              <source src={video1} type="video/mp4"/>
            </video>
          </div>
        </div>
        <div className={styles.section}>
          <h3>Something</h3>
          <div className={styles['video-wrapper']}>
            <video autoPlay loop width={'101%'}>
              <source src={video2} type="video/mp4"/>
            </video>
          </div> 
        </div>
        <div className={styles.section}>
          <h3>Something</h3>
          <div className={styles['video-wrapper']}>
            <video autoPlay loop width={'101%'}>
              <source src={video3} type="video/mp4"/>
            </video>
          </div>
        </div>
        <div className={styles.section}>
          <h3>Something</h3>
          <div className={styles['video-wrapper']}>
            <video autoPlay loop width={'101%'}>
              <source src={video4} type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}