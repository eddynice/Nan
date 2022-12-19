import classes from "./home.module.css";
import {data} from "../../data";
import {  useNavigate } from "react-router-dom";
const Home =()=>{ 
    const navigate = useNavigate();

    const redirectToContact = () => {
        navigate("/contact");
      };


    return(
       
        <div className={classes.home}>
            <div className={classes.home1}>
                {data.map((user)=>(
                    <div>
                        <h3 >{user.names}</h3>
                        <h1>
                <span className={classes.span}>{user.span}</span>
            </h1>
            <h3>{user.h3}</h3>
                    </div>
                    
                ))}
           
        <h3> <a href="/projects">View my Projects</a><a href="/#"> My Resume,</a> <a href="/skills">Skills</a>, or send me an email at <a href="/#">osareniyeosazee@gmail.com</a></h3>
       <div className={classes.button}>
       

        <button onClick={redirectToContact}> AVAILABLE FOR WORK </button>

        </div>
        </div>
        </div>
       
    )
}
export default Home