import React from 'react'
import ProjectList from './ProjectList';
import style from  "./project.module.css"
export default function Project({project}) {
  
  return (
    <div>
      <h1 className={style.H1}>Project</h1>
    <div className={style.grid}>
      
{project.map((projects, index) => (		
<ProjectList key={index} projects={projects}/>
					
				
			))}

    </div>
    </div>
  )
}
