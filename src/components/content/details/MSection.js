import { useState } from 'react';
import { SiReddit } from 'react-icons/si';
import { ScrollDown } from '../../scrolldown/ScrollDown';
import { resetScroll, setScroll } from '../../../store/scrollSlice';
import { useDispatch } from 'react-redux';

import video from '../../../resources/videos/minireddit/reddit-general.mp4';
import video1 from '../../../resources/videos/minireddit/reddit-sidemenu.mp4';
import video2 from '../../../resources/videos/minireddit/reddit-time-filter.mp4';
import video3 from '../../../resources/videos/minireddit/reddit-search.mp4';
import video4 from '../../../resources/videos/minireddit/reddit-loading.mp4';
import video5 from '../../../resources/videos/minireddit/reddit-comments.mp4';
import styles from './MSection.module.css';


export const MSection = () => {
  const dispatch = useDispatch();
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

    if (newScroll === 0) {
      dispatch(resetScroll());
    } else {
      dispatch(setScroll());
    }

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
          <div className={styles['icon-container']}>
            <SiReddit />
          </div>
          <h2><span>MINI</span>reddit</h2>
      </div>
      <div className={styles.details} onScroll={handleScroll}>
        <div className={styles.section}>
          <h3>First Look</h3>
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
          <ScrollDown />
        </div>
        <video autoPlay loop width={'100%'}>
          <source src={video} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Side Menu</h3>
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
        <video autoPlay loop width={'100%'}>
          <source src={video1} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Time Filter Functionality</h3>
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
        <video autoPlay loop width={'100%'}>
          <source src={video2} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Search Functionality</h3>
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
        <video autoPlay loop width={'100%'}>
          <source src={video3} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Posts Loading Animation</h3>
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
        <video autoPlay loop width={'100%'}>
          <source src={video4} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Comments</h3>
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
        <video autoPlay loop width={'100%'}>
          <source src={video5} type="video/mp4"/>
        </video>
      </div>
    </section>
  );
}