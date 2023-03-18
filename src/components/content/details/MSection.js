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
          <h3>Summary</h3>
          <p>
            This is a Reddit client with a minimalistic design that allows users to browse 
            posts and comments from pre-selected subreddits by fetching data from the Reddit 
            JSON API. I built this as a personal project to practice my React and Redux 
            skills. I mainly used Redux's Async Middleware to connect to and fetch data from 
            APIs. Additionally, I practiced scraping the incoming data from the API to extract 
            the specific information needed for the Reddit client.
          </p>
          <ScrollDown />
        </div>
        <video autoPlay muted loop playsInline width={'100%'}>
          <source src={video} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Side Menu</h3>
          <p>
            The side menu is the primary method for navigating between predefined subreddits
            and selecting the timeframe for posts. The displayed posts are the top 25 posts
            filtered by the selected time: day, month, year, or all time. Additionally, this 
            component displays a brief description of the selected subreddit.
          </p>  
        </div>
        <video autoPlay muted loop playsInline width={'100%'}>
          <source src={video1} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Time Filter Functionality</h3>
          <p>
            As mentioned in the previous section, the Reddit client features a time selector that 
            allows users to filter displayed posts based on their timeframe. Users can choose to 
            see the top 25 posts of the day, month, year, or all time for the selected subreddit. 
            This provides a convenient way to browse the most popular posts within a specific 
            timeframe.
          </p>  
        </div>
        <video autoPlay muted loop playsInline width={'100%'}>
          <source src={video2} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Search Functionality</h3>
          <p>
            The Reddit client also includes a simple search functionality. When the user clicks 
            "enter" or "submit" after entering a search term in the search bar, the client makes 
            a call to the Reddit API to retrieve up to 50 posts from an endpoint that matches the 
            user's search query.
          </p>  
        </div>
        <video autoPlay muted loop playsInline width={'100%'}>
          <source src={video3} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Posts Loading Animation</h3>
          <p>
            This is a loading component that I designed to be displayed while the fetch request 
            to the Reddit API is being handled in order to load the actual content.
          </p>  
        </div>
        <video autoPlay muted loop playsInline width={'100%'}>
          <source src={video4} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <h3>Comments</h3>
          <p>
            This, similar to the previous component, is a loading component that I designed to 
            display while the Reddit API is being handled to load the comments of the post the 
            user wants to read.
          </p>  
        </div>
        <video autoPlay muted loop playsInline width={'100%'}>
          <source src={video5} type="video/mp4"/>
        </video>
        <div className={styles.section}>
          <a
            className={styles.weblink} 
            href='https://minireddit-client.netlify.app/' 
            target='_blank' 
            rel='noreferrer'
          >Visit Site</a>
        </div>
        <div className={styles.section}>
          <h3>Future Updates</h3>
          <p>
            In the future, if I have time, I plan to enhance this project by adding more features 
            to improve the user experience. Some of these features include being able to vote for 
            posts and comments, adding the ability to comment on posts, and displaying each user's 
            Reddit avatar in the comments section. These additional features will make the Reddit 
            client more interactive and engaging for users.
          </p>  
        </div>
      </div>
    </section>
  );
}