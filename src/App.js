import React, { useState } from 'react';
import { createContext } from 'react';

import './css/App.css';

import Header from "./components/header"
import Footer from "./components/footer"
import Body from "./components/body"
import Switch from './components/SwitchComponent';

export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      <div className="App-main" id={theme} >
        <Switch theme={theme} toggleTheme={toggleTheme} />
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
