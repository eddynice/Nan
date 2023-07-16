import {useState,useEffect} from "react";
import Header from './component/header/Header';
//import Navbars from './navbars/navbars';
import Footer from './component/footer/Footer';
import Index from "./route"
 import {Rings} from  'react-loader-spinner'
import './App.css';
import { ToastContainer } from "react-toastify";
//import useDarkMode from './useDark';


function App() {
  //const [colorTheme, setTheme] = useDarkMode();
  const [loading, setloading] = useState(false)
 

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
  color=" #fff"
  radius="6"
  wrapperStyle={{ backgroundColor:"#192a69", height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}
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
      <Index/>
      <ToastContainer/>

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
