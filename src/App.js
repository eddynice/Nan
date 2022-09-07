import Home from './component/home/Home'
import Header from './component/header/Header';
import Sidebar from './component/siderbar/Sidebar'
import './App.css';
import {
 Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="container">
      <div className="header">
        <Header/>
      
      </div>
      <div className="main">
       
        
        <Routes>
             <Route exact path="/" element={<Home></Home>}></Route>
             <Route exact path="/About" element={<Home></Home>}></Route>
          </Routes>
     
      </div>
      <div className="sidebar">
        <Sidebar/>
       
      </div>
      
      
      
    </div>
  );
}

export default App;
