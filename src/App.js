import React, { useState } from 'react';

import './css/App.css';
import Header from "./components/header"
import Footer from "./components/footer"
import Body from "./components/body"
import ReactSwitch from "react-switch"
import { createContext } from 'react';

export const ThemeContext = createContext(null)


function App() {

  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }



  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      <div className="App-main" id={theme} >
        <div className='switch'>
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} className="switch" onColor="#000000" onHandleColor="#FFFFF" handleDiameter={15} uncheckedIcon={false} checkedIcon={false} boxShadow="0px 1px 2px rgba(0, 0, 0, 0.6)" activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)" height={8} width={20} />
          <label> ENG ESP </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} className="switch" onColor="#000000" onHandleColor="#FFFFF" handleDiameter={15} uncheckedIcon={false} checkedIcon={false} boxShadow="0px 1px 2px rgba(0, 0, 0, 0.6)" activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)" height={8} width={20} />
        
        </div>
        <Header />
        <br />
        <Body />
        <br />
        <Footer />
        <br />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
