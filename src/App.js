import React, { useState } from 'react';
import { createContext } from 'react';

import './css/App.css';

import Header from "./components/header"
import Footer from "./components/footer"
import Body from "./components/body"
import SwitchTheme from './components/SwitchComponentTheme';
import SwitchLeng from './components/SwitchComponentLeng';

export const ThemeContext = createContext(null)
export const LanguageContext = createContext(null)

function App() {

  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  const [leng, setLeng] = useState("ESP")
  const toggleLeng = () => {
    setLeng((curre) => (curre === "ENG" ? "ESP" : "ENG"))
  }

  return (


    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      <LanguageContext.Provider value={{ leng, toggleLeng }} >

        <div className="App-main" id={theme}  >
          <SwitchTheme theme={theme} toggleTheme={toggleTheme} />
          <SwitchLeng leng={leng} toggleLeng={toggleLeng} />

          <Header />   <br />
          <Body leng={leng} />     <br />
          <Footer />   <br />
          
        </div>

      </LanguageContext.Provider>
    </ThemeContext.Provider>


  );
}

export default App;
