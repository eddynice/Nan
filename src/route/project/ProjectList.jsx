import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import style from "./project.module.css"

export default function ProjectList({projects}) {
  return (

<div className={style.contain}>
    <LazyLoadImage
      src={projects.img} // use normal <img> attributes as props
      className={style.image} alt='movie'
      effect="blur" 
      />
    
<div className={style.overlay}>
<a href={projects.link}
          target="_blank"  className={style.text}
          rel="noopener noreferrer">{projects.Title} {" "}</a>
 
</div>
    </div>
    
  )
}
