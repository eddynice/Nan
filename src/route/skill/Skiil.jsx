import React from 'react';
import classes from "./skill.module.css";
import {frontEnd,backend} from "../../data";
//import {backend} from "../../data"

export default function Skiil() {
  
 // const toolsUse = ["React", "Javascript","Bootstap","wordpress","Html","Material-UI","Redux/Redux-saga","Css"]
  return (
    <div className={classes.container}>
      
        <h1 className={classes.H}>SKILLS</h1>

      <div className={classes.flex}>
      
      {frontEnd.map((user)=>(
      
        <div className={classes.box}>
        <h1  className={classes.hi}> <span >
             <svg aria-hidden="true" className={classes.icons} focusable="false" data-prefix="fas" data-icon="bezier-curve"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M368 32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM208 88h-84.75C113.75 64.56 90.84 48 64 48 28.66 48 0 76.65 0 112s28.66 64 64 64c26.84 0 49.75-16.56 59.25-40h79.73c-55.37 32.52-95.86 87.32-109.54 152h49.4c11.3-41.61 36.77-77.21 71.04-101.56-3.7-8.08-5.88-16.99-5.88-26.44V88zm-48 232H64c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM576 48c-26.84 0-49.75 16.56-59.25 40H432v72c0 9.45-2.19 18.36-5.88 26.44 34.27 24.35 59.74 59.95 71.04 101.56h49.4c-13.68-64.68-54.17-119.48-109.54-152h79.73c9.5 23.44 32.41 40 59.25 40 35.34 0 64-28.65 64-64s-28.66-64-64-64zm0 272h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"></path></svg></span> {user.headerOne}</h1>
             <h2>{ user.headTwo}</h2>
              <h3>{user.tools}</h3>
             <h2>{user.item}</h2> 
        </div>
          
      ))}

{backend.map((back)=>(
    <div className={classes.box}>
    <h1 className={classes.hi}><span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop-code" className={classes.icons} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg></span>{back.headerOne}</h1>
      <h2>{back.headTwo}</h2>
<h3>{back.tools}</h3>
<h2>{back.item}
</h2>

    </div>

))}
    
    </div>
    </div>
  )
}
