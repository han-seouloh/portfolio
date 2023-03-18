import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ScrollDown } from '../../scrolldown/ScrollDown';
import { resetScroll, setScroll } from '../../../store/scrollSlice';

import logo from '../../../resources/images/tanaka-logo.png';
import video from '../../../resources/videos/tanaka/tanaka-general.mp4';
import video1 from '../../../resources/videos/tanaka/tanaka-custom-dropdown.mp4';
import video2 from '../../../resources/videos/tanaka/tanaka-sidemenu.mp4';
import video3 from '../../../resources/videos/tanaka/tanaka-intersection-observer.mp4';
import video4 from '../../../resources/videos/tanaka/tanaka-gallery.mp4';
import video5 from '../../../resources/videos/tanaka/tanaka-blog.mp4';
import video6 from '../../../resources/videos/tanaka/tanaka-infinite-gallery.mp4';
import video7 from '../../../resources/videos/tanaka/tanaka-in-construction.mp4';
import styles from './TSection.module.css';

export const TSection = () => {
  const dispatch = useDispatch();
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState('');
  const portrait = window.matchMedia("(orientation: portrait)").matches;
  const websiteLink = <a
                        className={styles.link} 
                        href='https://mandalagroup.mx/gastronomic/restaurant/senora_tanaka'
                        target='_blank'
                        rel='noreferrer'
                      >current design</a>;

  const handleScroll = ( {target} ) => {
    const newScroll = target.scrollTop;
    const scrollLimit = target.scrollHeight;

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
          <img src={logo} alt='tanaka-logo' className={styles.logo} />
      </div>
      <div className={styles.details} onScroll={handleScroll}>
        <div className={styles.section}>
          <h3>Summary</h3>
          <p>
            This is a mock-website for the restaurant Señora Tanaka
            based on the {websiteLink}, where I reimagined some components
            and animations for an overall better UX/UI design. This project
            was programmed purely using vanilla JavaScript, CSS and HTML to 
            test my JavaScript skills without relying on a framework, and to
            see why some members of the programming community stand by using vanilla
            Javascript for web development.
          </p>
          <ScrollDown />
        </div>
        <video autoPlay muted loop playsInline width={'100%'}>
          <source src={video} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Custom Dropdown List</h3>
          <p>
            When I first started developing this website, the first hurdle came when
            I needed a custom dropdown menu. Most websites utilize <code>&lt;select&gt;</code> tags
            in conjunction with <code>&lt;option&gt;</code> tags but these don't allow
            for much styling. Thus, I used other stylable HTML elements to create a customizable
            dropdown list.
          </p>  
        </div>
        <video autoPlay muted loop playsInline width={'100%'}>
          <source src={video1} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Side Menu</h3>
          <p>
            I thought the menu that pops into view from clicking on the white side tab would make 
            more sense if it slid into view instead of popping in. I also sped up the hover and focus 
            animations within the menu elements for a more fluid experience. Additionally, I changed 
            the color scheme for some elements to give it a more elegant feel.
          </p>  
        </div>
        <video autoPlay muted loop playsInline width={'100%'}>
          <source src={video2} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Intersection Observer</h3>
          <p>
            For the About, Gallery, and Blog sections, I used the Intersection Observer API to trigger 
            animations when the sections came into view. I also reimagined all the animations for these 
            sections by playing a bit with the parallax effect, and allowed for them to be triggered each 
            time these sections come into view, instead of only once, as many websites do.
          </p>  
        </div>
        <video autoPlay muted loop playsInline width={'100%'}>
          <source src={video3} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Gallery</h3>
          <p>
            For the Gallery, I sized the images from small to big, starting from the outermost images, to 
            give it an illusion of depth. I also resized and cropped the images as needed into a 1:1 aspect ratio 
            to remove the stretched look. Additionally, I integrated the buttons to explore the images to 
            the innermost focused image to give it a cleaner look.
          </p>  
        </div>
        <video autoPlay muted loop playsInline width={'100%'}>
          <source src={video4} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Blog</h3>
          <p>
            For the Blog section, I gave the images different tempos for sliding in to achieve a parallax effect. 
            Unlike the previous gallery, I did not want the blogs to loop. This means that once the last blog is in 
            focus, the next button is removed. Similarly, when the first blog is visible, the previous button is 
            removed from view. I deliberately chose to remove the looping feature in order to create a unique 
            slideshow mechanic for the blog section.
          </p>  
        </div>
        <video autoPlay muted loop playsInline width={'100%'}>
          <source src={video5} type="video/mp4"/>
        </video>
        <div className={`${styles.section} ${styles['section-large']}`}>
          <h3>Infinite Gallery</h3>
          <p>
            To provide another way to display the image gallery, I implemented a horizontally-scrolling gallery 
            that infinitely loops the images from one end of the viewport to another. This feature adds a dynamic 
            element to the website's design and allows for a more interactive user experience. Although it was 
            challenging to think of a way to keep the gallery looping smoothly, I solved it by utilizing datasets 
            to assign one of three states to each image element: before, focused, and after. The image elements 
            are in a 'before' state <code>(2)</code> when out of view on the right side of the viewport, a 'focused' 
            state <code>(0)</code> when sliding into view, and an 'after' state <code>(1)</code> when sliding out of 
            view to the left.
          </p>  
        </div>
        <video autoPlay muted loop playsInline width={'100%'}>
          <source src={video6} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>In-Construction</h3>
          <p>
            As I developed this website without using any frameworks, I didn't have access to React Router for 
            routing. To implement routing, I created a simple solution using datasets and two 
            separate <code>&lt;main&gt;</code> elements containing the two sites in which the user would be redirected
            between depending on the section he/she desires to visit. 
            When the user clicks on the Events (Eventos) or Jobs (Bolsa de Trabajo) tab, they are directed to an 
            "In Construction" page without the entire site reloading itself.
          </p>  
        </div>
        <video autoPlay muted loop playsInline width={'100%'}>
          <source src={video7} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <a
            className={styles.weblink} 
            href='https://mx-restaurant-demo.netlify.app/' 
            target='_blank' 
            rel='noreferrer'
          >Visit Site</a>
        </div>
      </div>
    </section>
  );
}