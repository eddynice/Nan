import {useState,useEffect} from "react"
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Index from "./route"
 import {Rings} from  'react-loader-spinner'
import './App.css';
import { ToastContainer } from "react-toastify";
import useDarkMode from './useDark';


function App() {
  const [colorTheme, setTheme] = useDarkMode();
  const [loading, setloading] = useState(false)
 

 useEffect(() => {
   setloading(true);
   setTimeout(()=>{
    setloading(false);
   },5000);
  },[]);
 
  
  return (
    <div className="grid-container">

<button
            onClick={() => setTheme(colorTheme)}
            className="mr-10 mt-5 hover:text-red-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-5 w-5 text-gray-600 dark:text-gray-200"
            >
              {colorTheme === 'light' ? (
                <path
                  className="w-3 h-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  className="w-3 h-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          </button>





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
