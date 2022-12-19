import Home from './component/home/Home'
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import About from './component/about/about';

import Skills from './component/skill/Skiil'
import Contact from './component/contact/Contact'
import Project from './component/project/Project';
import AnimationLayout from "./animation"
import {
  Routes,
   Route,
 } from "react-router-dom";
 import {FallingLines} from  'react-loader-spinner'
//import {
 // CSSTransition, TransitionGroup} from 'react-transition-group';

//import './App.css';

function App() {
 // const location = useLocation()
  return (
    <div className="grid-container">
      <header>
      <Header/>
      </header>

    
    <main>
    
<Routes>
  

 <Route element={<AnimationLayout />}>

<Route  path="/" element={<Home/>}/>
<Route  path="/about" element={<About/>}/>
<Route path="/skills" element={<Skills/>}/>
<Route  path="/contact" element={<Contact/>}/>
<Route  path="/projects" element={<Project/>}/>
</Route>
</Routes>
</main>

      <footer>
      <Footer/>
      </footer>
      
      
      
    </div>
  );
}

export default App;
