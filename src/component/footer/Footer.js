import React from 'react'
import "./footer.css";
import { Link } from "react-router-dom";
import { BsFacebook ,BsTwitter,BsGithub,BsInstagram,BsLinkedin} from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
export default function Footer() {

  const Style= {color:"white", fontSize:"2.5em"}
  return (
    <div className="footer">
      <h2>You can aiso follow me </h2>






      <div className="Icons">
        <div className="one">
        
      
     <Link to="/"> <BsFacebook style={Style} />{" "}</Link>
    

        </div>
        <div className="2">
          <Link to="/"> <BsTwitter style={Style} />{" "}</Link>
          </div>
        <div className="3">
        <Link to="/"> <BsGithub style={Style} />{" "}</Link>
        </div>
        <div className="4">
          <Link to="/"> <BsInstagram style={Style} />{" "}</Link>
        </div>
        <div className="4">
          <Link to="/"> <BsLinkedin style={Style} />{" "}</Link>
        </div>
      </div>
      <div className="Links">
      <ul className="UL">
        <div>
        <li>
            <Link to="/" className="names" style={{color:"#fff",fontSize:'1.5em'}} > <DiCodeigniter/>SAZE</Link>
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
      <p>@CopyRight 2022</p>
    </div>
  )
}
