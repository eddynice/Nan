import {Link} from "react-router-dom"
import './side.css'
const Sidebar =()=>{
    return(
        
            <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contjjjjact</Link>
            </li>
          </ul>
        </nav>

        
    )
}
export default Sidebar