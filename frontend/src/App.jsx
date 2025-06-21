import {useState,useEffect} from 'react';
import axios from 'axios';
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
    <>
      <h1>My Portfolio</h1>
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* We'll add the image and links later */}
          </div>
        ))}
      </div>
    </>
  )
  
}

export default App
