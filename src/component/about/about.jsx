import React from 'react';
import classes from "./about.module.css"
import {Link} from "react-router-dom"

export default function about() {
  return (
    
    <div className={classes.about}>
      <h1>ABOUT ME</h1>
     
      <h2>I'm a Fullstack Software Developer and a technology enthusiast who is passionate about problem solving and adapts well to change. I'm a diverse individual who loves to integrate and contribute meaningfully to the progress of any team I'm opportune to work with. My objectives are to create meaningful and useful products, and be a valuable member of my stakeholders.

I enjoy mentoring, writing, gaming, and meeting new people.</h2>
<h2 className={classes.bigH2}>Engineering</h2>
<h2>My interest in coding started back in 2015 when i got admission into the university to study computer science.As an undergraduate i had the opportunity to meet other computer science student,were we  share ideas, built simple HTML websites with some functionality,
During my days in school we were given different project on programming to work on, which aiso gave me the opportunity do more research. 
My experience as a programmer has taught me there are various ways to face a problem and many approaches to solve it. This allows me to come up with creative solutions to practical problems,
and also build engaging and responsive websites.</h2>


<h2 className={classes.bigH2}>Hobby</h2>
<h2>I love football, listening to music, reading motivational books, and outdoor activities.
</h2>

<h2 style={{marginTop:"16px",marginBottom:"10px"}}>You can read more about me, experience, skills, and education in the PDF attached below:</h2>
<Link to="/resume"  className={classes.button}>My Resume</Link>


    </div>
  
  )
}
