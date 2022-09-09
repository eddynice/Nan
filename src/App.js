import Home from './component/home/Home'
import Header from './component/header/Header';
import About from './component/about/about'
import Skills from './component/skill/Skiil'
import Sidebar from './component/siderbar/Sidebar'
import Contact from './component/contact/Contact'
import Project from './component/project/Project';
import {AnimatePresence} from "framer-motion"
import {
  Routes,useLocation,
   Route,
 } from "react-router-dom";
import {
  CSSTransition, TransitionGroup} from 'react-transition-group';

import './App.css';

function App() {
  const location = useLocation()
  return (
    <div className="container">
      <div className="header">
        <Header/>
      
      </div>
      <div className="main">
    
<Routes>

             <Route exact path="/" element={<Home/>}></Route>
             <Route exact path="/about" element={<About/>}></Route>
             <Route exact path="/skills" element={<Skills/>}></Route>
             <Route exact path="/contact" element={<Contact/>}></Route>
             <Route exact path="/projects" element={<Project/>}></Route>
          
          </Routes>
         
    
        
        
      </div>
      <div className="sidebar">
        <Sidebar/>
       
      </div>
      
      
      
    </div>
  );
}

export default App;
