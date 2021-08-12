import React, {useState} from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Mainscreen from './Mainscreen/Mainscreen';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "rgb(130, 130, 130)" : "rgb(166, 161, 31)" }}>Light Mode</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "rgb(200, 109, 253)" : "rgb(0, 0, 0)"}}>Dark Mode</span>
      </div>
      <Mainscreen />
      <Footer />
    </div>
  );
}

export default App;
