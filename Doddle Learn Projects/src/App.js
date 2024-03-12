import './App.css';
import projects from './data';

function App() {
  console.log(projects);
  return (
    <div className='wrapper'>
      <h1>Doddle Learn Projects</h1>
      <h4>A List of Projects <span className='link'>I contributed</span> to the discontinuted Doddle Learn Platform.</h4>
      <a href="https://andrewtech.onrender.com/#about" target="_blank" rel="noreferrer" className='link'>About Me <i className="fas fa-external-link"></i></a>
      <div className='project-list'>
        {projects.map((project) => (
          <a href={project.url} target="_blank" rel="noreferrer">{project.title} <i className="fas fa-external-link"></i></a>
        ))}
      </div>
    </div>
  );
}

export default App;
