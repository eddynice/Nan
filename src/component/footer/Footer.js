import { Link } from "react-router-dom";
import { BsFacebook ,BsTwitter,BsGithub,BsLinkedin} from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import styles from "./footer.module.css";



export default function Footer() {

  const Style= {color:"white", fontSize:"2.5em"}
  return (
    <div className={styles.footer}>
      <h2>You can also follow me </h2>






      <div className={styles.Icons}>
        
      <a href="https://m.facebook.com/osazee.endurance.7"
          target="_blank"
          rel="noopener noreferrer"> <BsFacebook style={Style} />{" "}</a>
    

       
       
         <a href="https://twitter.com/iameddynics"
          target="_blank"
          rel="noopener noreferrer"><BsTwitter style={Style} className="icon" /></a> {" "}
      
        
        <a href="https://github.com/eddynice"
          target="_blank"
          rel="noopener noreferrer"> <BsGithub style={Style} />{" "}</a>
       
        <a
          href="https://www.linkedin.com/in/osazee-osareniye-5724a11b4"
          target="_blank"
          rel="noopener noreferrer"
        > <BsLinkedin style={Style} />{" "}</a>
        
      </div>
      
      <div className={styles.Links}>
      <ul className={styles.UL}>
        <div>
        <li>
            <Link to="/" className={styles.names} style={{color:"#fff",fontSize:'1.5em'}} > <DiCodeigniter/>SAZE</Link>
            </li>
            </div>
            <div>
            <li>

              <Link to="/projects">Project</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
        </div>
            <div>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
           
           
            </div>
            
          </ul>

      </div>
      <p style={{padding:"5px"}}>&#169;{" "}2023 {" "} osazee</p>
    </div>
  )
}
