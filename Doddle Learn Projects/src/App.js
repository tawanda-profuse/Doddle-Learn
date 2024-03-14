import './App.css';
import projects from './data';

function App() {
  const sortedProjects = projects.slice().sort((a, b) => {
    // Convert both titles to lowercase for case-insensitive sorting
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
  
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  const chooseColor = (category)=>{
    switch (category) {
      case "Math":
        return "blue"
      case "Languages":
        return "green"
      case "Biology":
        return "red"
      case "Physics":
        return "hotpink"
      default:
        return "gray"
    }
  }
  
  return (
    <div className='wrapper'>
      <h1>Doddle Learn Projects</h1>
      <h4>A list of projects I contributed to the discontinued Doddle Learn Platform.</h4>
      <a href="https://andrewtech.onrender.com/#about" target="_blank" rel="noreferrer" className='link'>About Me <i className="fas fa-external-link"></i></a>
      <div className='project-list'>
        {sortedProjects.map((project) => (
          <span><a href={project.url} target="_blank" rel="noreferrer">{project.title} <i className="fas fa-external-link"></i></a> <strong className='category' style={{backgroundColor: chooseColor(project.category)}}>{project.category}</strong></span>
        ))}
      </div>
    </div>
  );
}

export default App;
