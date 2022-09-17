import Home from './component/home/Home'
import Header from './component/header/Header';
import About from './component/about/about'
import Skills from './component/skill/Skiil'
import Sidebar from './component/siderbar/Sidebar'
import Contact from './component/contact/Contact'
import Project from './component/project/Project';
import AnimationLayout from "./animation"
import {
  Routes,
   Route,
 } from "react-router-dom";
//import {
 // CSSTransition, TransitionGroup} from 'react-transition-group';

import './App.css';

function App() {
 // const location = useLocation()
  return (
    <div className="container">
      <div className="header">
        <Header/>
      
      </div>

      <div className="main">
    
    
<Routes>
<Route element={<AnimationLayout />}/>

<Route  path="/" element={<Home/>}/>
<Route  path="/about" element={<About/>}/>
<Route path="/skills" element={<Skills/>}/>
<Route  path="/contact" element={<Contact/>}/>
<Route  path="/projects" element={<Project/>}/>

</Routes>
      </div>
      <div className="sidebar">
        <Sidebar/>
       
      </div>
      
      
      
    </div>
  );
}

export default App;
