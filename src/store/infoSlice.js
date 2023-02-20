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
        heading: 'EXPERIENCE & STACK',
        body: `In this section I list and display my experience
        and the tech stack I am use. I also list my education, the 
        technologies and frameworks I am currently learning, and 
        any other noteworthy skills.`
      },
      current:  {
        heading: 'CURRENT/FUTURE PROJECTS',
        body: `This section is for the projects I'm currently working
        on and the projects I have planned for the future. My vision
        and mission can also be found here.`
      },
      projects:  {
        heading: 'PAST PROJECTS',
        body: `This is a summary of my portfolio where you'll be able
        to get a quick glance at the projects I have developed to
        improve my skills.`
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