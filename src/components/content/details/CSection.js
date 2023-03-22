import { useState } from 'react';
import { ScrollDown } from '../../scrolldown/ScrollDown';
import { resetScroll, setScroll } from '../../../store/scrollSlice';
import { useDispatch } from 'react-redux';

import video from '../../../resources/videos/portfolio/portfolio-general.mp4';
import video1 from '../../../resources/videos/portfolio/portfolio-planets.mp4';
import video2 from '../../../resources/videos/portfolio/portfolio-hover.mp4';
import video3 from '../../../resources/videos/portfolio/portfolio-help.mp4';
import video4 from '../../../resources/videos/portfolio/portfolio-content.mp4';
import video5 from '../../../resources/videos/portfolio/portfolio-responsive-1.mp4';
import video6 from '../../../resources/videos/portfolio/portfolio-responsive-2.mp4';
import loading from '../../../resources/images/loading.gif';
import styles from './CSection.module.css';


export const CSection = () => {
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
        <div>
          <h2>CURRENT</h2>
          <h2>PROJECTS</h2>
        </div>
      </div>
      <div className={styles.details} onScroll={handleScroll}>
        <div className={styles.section}>
          <h3>Portfolio</h3>
          <p>
            This is my portfolio website featuring a solar system-inspired design based on Ptolemy's 
            model of the solar system that allows users to interact with each planet, each representing 
            a section of my portfolio. I designed and developed the website from start to finish using 
            ReactJS and Redux to ensure that the user experience matches my vision as closely as possible 
            based on my current skill set. So go ahead, explore the galaxy of my work and see what 
            each planet has to offer!
          </p> 
          <ScrollDown />
        </div>
        <video autoPlay muted loop playsInline poster={loading} width={'100%'}>
          <source src={video} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Planets</h3>
          <p>
            As you explore my portfolio, you'll discover a series of planets, each containing a different 
            section of my work. From an "About Me" page to an overview of my projects, each planet offers 
            a unique glimpse into my skills and experience. To interact with a planet, simply click on it 
            and it will move to the center of its orbit and grow in size displaying a brief summary of the 
            section's content. Even while a planet is in focus, you can still navigate between different 
            sections of the portfolio with ease.
          </p>  
        </div>
        <video autoPlay muted loop playsInline poster={loading} width={'100%'}>
          <source src={video1} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Hover Stop</h3>
          <p>
            Each planet has a hover stop feature allowing for a smoother planet selection by lighting up 
            the planet's orbit and stopping the animation when the user hovers over it. This feature is 
            only available when viewing the site in a desktop browser or any device navigating the site with 
            a mouse or trackpad which allow hover events to trigger.
          </p>  
        </div>
        <video autoPlay muted loop playsInline poster={loading} width={'100%'}>
          <source src={video2} type="video/mp4"/>
        </video>
        <div className={styles.section}>
        <h3>Help</h3>
          <p>
            A help section has been added in the upper left corner, represented by a question mark icon, to 
            ensure that all visitors can easily navigate the portfolio site. This section provides a tutorial 
            as for how to navigate the site for first-time visitors who may find the site's navigation less 
            intuitive. The aim of this addition is to make the site more user-friendly and accessible to everyone.
          </p>  
        </div>
        <video autoPlay muted loop playsInline poster={loading} width={'100%'}>
          <source src={video3} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Content</h3>
          <p>
            I tested two different ways for users to view the content of each section to see which would allow for 
            a smoother visualization that aligns with the overall feel of the portfolio. The previous design for the 
            scrollable content is displayed below to show how it was updated in the next section to account for 
            responsive design.
          </p>  
        </div>
        <video autoPlay muted loop playsInline poster={loading} width={'100%'}>
          <source src={video4} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Responsive Design</h3>
          <p>
            I created a simple media query in CSS to detect a portrait viewport as a mobile device, instead of making 
            a separate media query for each screen size. This saved time and was possible because the portfolio has a 
            simple enough design. Additionally, the title of each section grows or shrinks depending on the scroll 
            direction the user makes, allowing for a better visualization of the content. This feature is only available 
            on mobile devices when viewing the site in portrait mode. 
          </p>  
        </div>
        <div className={styles['vertical-video']}>
          <video autoPlay loop height={'90%'}>
            <source src={video5} type="video/mp4"/>
          </video>
          <video autoPlay loop height={'90%'}>
            <source src={video6} type="video/mp4"/>
          </video>
        </div>
        <div className={styles.section}>
          <h3>Other Projects</h3>
          <ul>
            <li>
              <h4>Pokemon Database:</h4>
              <p>
                This is a project to practice what I'm learning in my ExpressJS courses. This backend 
                server will contain a database of all Gen 1 Pokemon with their respective Pokedex 
                Index, Name, Type, Description and Evolution Condition.
              </p> 
            </li>
            <li>
              <h4>Grind 75 (JavaScript):</h4>
              <p>
                This is a repo where I'll be uploading my solutions to the Leetcode problems I'll 
                be solving to practice and study Algorithms and Data Structures with short explanations
                as to how & why the solution works.
              </p> 
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Future Projects</h3>
          <ul>
            <li>
              <h4>Simple 3D Open World Game: </h4>
              <p>
                A simple 3d open world game to apply what I learn of ThreeJS and increase the arsenal
                of what I can build.
              </p> 
            </li>
            <li>
              <h4>E-Commerce Site: </h4>
              <p>
                A simple E-Commerce site to put to practice my Full-Stack skills once I finish
                my backend courses. This would allow me to build a small project from start to finish
                putting to practice all I'll have learned from frontend to backend development.
              </p> 
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}