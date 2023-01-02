import React from 'react';
import classes from "./about.module.css"
import {Link} from "react-router-dom"
import {abouts} from "../../data"

export default function about() {
  return (
    <>
    {abouts.map((about, index)=>(
    <div key={index} className={classes.about}>
      <h1>{about.h1}</h1>
     
      <h2>{about.h2}</h2>
<h2 className={classes.bigH2}>{about.heading1}</h2>
<h2>{about.h3}</h2>


<h2 className={classes.bigH2}>{about.heading2}</h2>
<h2>{about.h4}</h2>

<h2 style={{marginTop:"16px",marginBottom:"10px"}}>{about.h5}</h2>
<Link to="/resume"  className={classes.button}>My Resume</Link>


    </div>
    ))}
  </>
  )
}
