import {useState,useEffect} from "react"
import Home from './component/home/Home'
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import About from './component/about/about';
import Skills from './component/skill/Skiil'
import Contact from './component/contact/Contact'
import Project from './component/project/Project';
import AnimationLayout from "./animation";
import ErrorPage from "./component/notFound/ErrorPage"
import Resume from "./component/Resume"
import {
  Routes,
   Route,
 } from "react-router-dom";
 import {Rings} from  'react-loader-spinner'
//import {
 // CSSTransition, TransitionGroup} from 'react-transition-group';

import './App.css';

function App() {
  const [loading, setloading] = useState(false)
 // const location = useLocation()
 useEffect(() => {
   setloading(true);
   setTimeout(()=>{
    setloading(false);
   },5000);
  },[]);
 
  
  return (
    <div className="grid-container">
      {loading ? (
        <div className="loading">
       <Rings
  height="100"
  width="100"
  color=" #192a69"
  radius="6"
  wrapperStyle={{display:"flex",justifyContent:"center",alignItems:"center"}}
  wrapperClass=""
  visible={true}
  ariaLabel="rings-loading"
/>
        </div>
      ):(
<>
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
  <Route  path="/resume" element={<Resume/>}/>
  <Route path="*" element={<ErrorPage />} />
  </Route>
  </Routes>
  </main>
  
        <footer>
        <Footer/>
        </footer>
        </>
      )}
     
      
      
      
    </div>
  );
}

export default App;
