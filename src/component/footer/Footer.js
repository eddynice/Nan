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
        <div className="icon">
        
      
        <a href="https://github.com/sinansarikaya/react-movie-app"
          target="_blank"
          rel="noopener noreferrer"> <BsFacebook style={Style} />{" "}</a>
    

        </div>
        <div className="icon">
         <a href="https://github.com/sinansarikaya/react-movie-app"
          target="_blank"
          rel="noopener noreferrer"><BsTwitter style={Style} className="icon" /></a> {" "}
          </div>
        <div className="icon1">
        <a href="https://github.com/sinansarikaya/react-movie-app"
          target="_blank"
          rel="noopener noreferrer"> <BsGithub style={Style} />{" "}</a>
        </div>
        <div className="icon2">
        <a
          href="https://github.com/sinansarikaya/react-movie-app"
          target="_blank"
          rel="noopener noreferrer"
        > <BsInstagram style={Style} />{" "}</a>
        </div>
        <div className="icon3">
        <a
          href="https://github.com/sinansarikaya/react-movie-app"
          target="_blank"
          rel="noopener noreferrer"
        > <BsLinkedin style={Style} />{" "}</a>
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
      <p style={{padding:"5px"}}>@CopyRight 2022</p>
    </div>
  )
}
