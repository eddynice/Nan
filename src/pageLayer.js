import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
  Navigate
} from "react-router-dom";
import { motion } from "framer-motion";

/**
 * https://stackoverflow.com/questions/71808023/transition-between-routes-in-react-router-dom-v6-3
 */

const About = () => <h1>About</h1>;
const Audit = () => <h1>Audit</h1>;
const SmartX = () => <h1>SmartX</h1>;
const FAQ = () => <h1>FAQ</h1>;
const Support = () => <h1>Support</h1>;
const Terms = () => <h1>Terms</h1>;
const Policy = () => <h1>Policy</h1>;

const PageLayout = ({ children }) => children;

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.5
};

const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  );
};

export default function Appp() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      
        <ul>
          <li>
            <Link to="/audit">Audit</Link>
          </li>
          <li>
            <Link to="/smartx">SmartX</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
          <li>
            <Link to="/policy">Policy</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Routes>
          <Route element={<AnimationLayout />}>
            <Route path="/audit" element={<Audit />} />
            <Route path="/smartx" element={<SmartX />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/support" element={<Support />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/audit" replace />} />
          </Route>
        </Routes>
      
    </div>
  );
}