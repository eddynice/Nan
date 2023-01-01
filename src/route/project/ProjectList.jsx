import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
//import { Link } from 'react-router-dom'
import "./project.css"

export default function ProjectList({projects}) {
  return (

<div className='contain'>


    <LazyLoadImage
      src={projects.img} // use normal <img> attributes as props
      className="image" alt='movie'
      effect="blur" 
      />
   
  

       
       
<div className='overlay'>
<a href={projects.link}
          target="_blank"  className='text'
          rel="noopener noreferrer">{projects.Title} {" "}</a>
 
</div>
    
   
        

    </div>
    
  )
}
