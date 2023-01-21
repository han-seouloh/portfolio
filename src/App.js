import './App.css';
import { About } from './components/about/About';
import { Projects } from './components/projects/Projects';
import { Minireddit } from './components/minireddit/Minireddit';

function App() {
  return (
    <div id='app'>
      <About />
      <Projects />
    </div>
  );
}

export default App;
