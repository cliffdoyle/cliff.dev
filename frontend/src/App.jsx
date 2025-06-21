import {useState,useEffect} from 'react';
import axios from 'axios';
//Import the new component
import ProjectCard from './components/projectCard';
function App() {
  //State to store our projects
  const [projects, setProjects] = useState([]);

  //useEffect runs once when the component loads
  useEffect(()=>{
    const fetchProjects=async()=>{
      try{
        //Make a Get request to our Django API
        const response = await axios.get('http://127.0.0.1:8000/api/projects/');

        //Update the state with the fetched projects
        setProjects(response.data);
      }catch (errror){
        console.error('There was an error fetching the projects!',errror)

      }
      
    };
    fetchProjects();

  },[])//The empty array ensures this effect runs only once
  return (
    <div className="app-container">
      <header>
        <h1>My Portfolio</h1>
        <p>A collection of my work.</p>
      </header>
      <main>
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map(project => (
            // Use our new component here and pass the project data to it
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
  
}

export default App
