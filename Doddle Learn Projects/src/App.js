import './App.css';
import projects from './data';

function App() {
  console.log(projects);
  return (
    <div className='wrapper'>
      <h1>Doddle Learn Projects</h1>
      <h4>A List of Projects I contributed to the discontinuted Doddle Learn Platform.</h4>
      <div className='project-list'>
        {projects.map((project) => (
          <a target="_blank" href={project.url} rel="noreferrer">{project.title}</a>
        ))}
      </div>
    </div>
  );
}

export default App;
