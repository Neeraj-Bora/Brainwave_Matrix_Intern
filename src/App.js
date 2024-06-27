import "./App.css";
import Navbar from './Components/Navbar.js';
import Main from "./Components/Main.js";
import Login from "./Components/Login.js";
import Footer from "./Components/Footer.js"
import Mtv from "./Components/Mtv.js";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="min-w-[100%] min-h-[100%]">
      <Router>
        {/* <Navbar/> */}
        {/* <Routes>
          <Route exact path="/login" element={<Login/>}/>   
          <Route exact path="/" element={<Main/>}/>
        </Routes> */}
        <Mtv/>
        {/* <Footer/> */}
      </Router>
    </div>
      
  );
}

export default App;
