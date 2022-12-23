import React from 'react'
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <h2>You can AISO FIND ME AT</h2>
      <div className="Icons">
        <div className="1">1</div>
        <div className="2">2</div>
        <div className="3">3</div>
        <div className="4">4</div>
      </div>
      <div className="Links">
      <ul className="UL">
        <div>
        <li>
            <Link to="/"  >Home</Link>
            </li>
            </div>
            <div>
            <li>

              <Link to="/projects">user 1</Link>
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
