import './App.css';
import { About } from './components/about/About';
import { Projects } from './components/projects/Projects';
import { CurrentProjects } from './components/projects/CurrentProjects';

function App() {
  return (
    <div id='app'>
      <About />
      <CurrentProjects />
      <Projects />
    </div>
  );
}

export default App;
