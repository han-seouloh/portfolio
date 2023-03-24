import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
  name: 'info',
  initialState: {
    previews: {
      default: {
        heading: '',
        body: ''
      },
      about: {
        heading: 'ABOUT ME',
        body: `I'm Chan In Kwun, an administrative mechanical 
        engineer graduate turned front-end developer and currently 
        studying back-end development. In this section you'll learn
        a bit more about me, my values and my contact information.`
      },
      experience:  {
        heading: 'EDUCATION & STACK',
        body: `In this section, I list and display my education as well 
        as the tech stack I am proficient in. Additionally, I outline 
        the technologies and frameworks I am eager to learn in the future, 
        and highlight any other notable skills.`
      },
      current:  {
        heading: 'CURRENT/FUTURE PROJECTS',
        body: `This section showcases my current and future projects and serves 
        as a platform for me to present my technical skills and interests. Here, 
        you will find the projects I am currently working on, as well as those 
        I plan to pursue in the future.`
      },
      projects:  {
        heading: 'PAST PROJECTS',
        body: `This is a summary of my portfolio, where you can quickly glance 
        at the projects I have developed to improve my skills.`
      },
      minireddit:  {
        heading: 'MINIreddit',
        body: `MINIreddit is a reddit client I made to test my
        React and Redux skills, mainly to practice and learn a bit 
        more about using Redux's async thunks to connect to APIs.
        (Desktop Website)`
      },
      tanaka:  {
        heading: 'Señora Tanaka (Restaurant)',
        body: `This is a demo website I made as a personal project 
        of a restaurant in Mexico. I programmed this website without
        resorting to any frontend frameworks to practice developing a
        website purely with vanilla Javascript.`
      }
    }
  }
});

export const selectInfo = state => state.info;
export default infoSlice.reducer;