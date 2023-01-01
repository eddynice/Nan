import React from 'react'
import ProjectList from './ProjectList';
import "./project.css"
export default function Project({project}) {
  
  return (
    <div>
      <h1 className='H1'>Project</h1>
    <div className='grid'>
      
{project.map((projects, index) => (		
<ProjectList key={index} projects={projects}/>
					
				
			))}

    </div>
    </div>
  )
}
