import React from 'react';
import Home from './home/Home'
import ErrorPage from "./notFound/ErrorPage"
import Resume from "./resume/Resume";
import About from './about/about';
import Skills from './skill/Skiil'
import Contact from './contact/Contact'
import Project from './project/Project'
import AnimationLayout from "../animation";
import {project} from "../data"
import {
    Routes,
     Route,
   } from "react-router-dom";
export default function Index() {

  return (
    <div>


<Routes>
    
  
    <Route element={<AnimationLayout />}>
    
   <Route  path="/" element={<Home/>}/>
   <Route  path="/about" element={<About/>}/>
   <Route path="/skills" element={<Skills/>}/>
   <Route  path="/contact" element={<Contact/>}/>
   <Route  path="/projects" element={<Project  project={project}/>}/>
   <Route  path="/resume" element={<Resume/>}/>
   <Route path="*" element={<ErrorPage />} />
   </Route>
   </Routes>

    </div>
  )
}
