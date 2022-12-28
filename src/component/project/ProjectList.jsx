import React from 'react'
import { Link } from 'react-router-dom'
import "./project.css"

export default function ProjectList({projects}) {
  return (

<div className='contain'>
  
       
        <img src={projects.img} className="image" alt='movie'></img>
<div className='overlay'>
  
  <Link to="/" className='text'> jdkddkkdk</Link>
</div>
    
   
        

    </div>
    
  )
}
