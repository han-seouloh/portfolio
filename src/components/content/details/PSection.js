import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetScroll, setScroll } from '../../../store/scrollSlice';
import { ScrollDown } from '../../scrolldown/ScrollDown';

import redditVideo from '../../../resources/videos/minireddit/reddit-general.mp4';
import tanakaVideo from '../../../resources/videos/tanaka/tanaka-general.mp4';
import loading from '../../../resources/images/loading.gif';
import styles from './PSection.module.css';

export const PSection = () => {
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
        <h2>PROJECTS</h2>
      </div>
      <div className={styles.details} onScroll={handleScroll}>
        <div className={styles.section}>
          <h3>Summary</h3>
          <p>
            This is a section dedicated to providing a brief overview and first look at the 
            projects I have completed and deemed worthy of displaying on my portfolio. All 
            of these projects were either designed by me or, in the case of the Tanaka project, 
            solely the reimagined changes were made by me. To consider a project worthy of 
            display, I ensured that it demonstrated a certain degree of difficulty and, most 
            importantly, showcased my mastery level of the technology or framework used.
          </p>
          <ScrollDown />
        </div>
        <div className={styles.section}>
          <h3>MINIreddit</h3>
          <p>
            This is a simple Reddit client with a clean and minimalistic design that enables users 
            to explore posts and comments from selected subreddits by fetching data from Reddit's 
            JSON API. It was developed to enhance my proficiency in React and Redux, with a primary 
            focus on utilizing Redux's Async Middleware to establish and retrieve data from APIs. 
            I also practiced extracting the essential information needed for the Reddit client by 
            scraping the incoming data from the API.
          </p>
        </div>
        <video autoPlay muted loop playsInline poster={loading} width={'100%'}>
          <source src={redditVideo} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Sra. Tanaka</h3>
          <p>
            This is a prototype website for Señora Tanaka restaurant which I designed with reimagined 
            components and animations to enhance its overall user experience and interface. The 
            project aimed to test my JavaScript skills without relying on a framework, and to explore 
            the benefits of using vanilla JavaScript for web development. The website was programmed 
            solely using vanilla JavaScript, CSS, and HTML.
          </p> 
        </div>
        <video autoPlay muted loop playsInline poster={loading} width={'100%'}>
          <source src={tanakaVideo} type="video/mp4"/>
        </video>
      </div>
    </section>
  );
}