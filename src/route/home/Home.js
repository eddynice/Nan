import classes from "./home.module.css";
import {data} from "../../data";
import {  useNavigate,Link } from "react-router-dom";
const Home =()=>{ 
    const navigate = useNavigate();

    const redirectToContact = () => {
        navigate("/contact");
      };


    return(
       
        <div className={classes.home}>
            <div className={classes.home1}>
                {data.map((user, index)=>(
                    <div key={index}>
                        <h3 >{user.names}</h3>
                        <div className={classes.p}>
                        <h1>
                <span className={classes.span}>{user.span}</span>
            </h1>
            </div>
            <h3>{user.h3}</h3>
                    </div>
                    
                ))}
           
        <h3> <Link to="/projects">View my Projects</Link>{" "}<Link to="/resume"> My Resume</Link>{" "} <Link to="/skills">Skills</Link>{" "} or send me an E-mail to  <a href="mailto:osareniyeosazee@gmail.com?body=My custom mail body"> osareniyeosazee@gmail.com</a></h3>
        
       <div className={classes.button}>

        <button onClick={redirectToContact}> AVAILABLE FOR WORK </button>

        </div>
        </div>
        </div>
       
    )
}
export default Home