import { useState, useEffect } from 'react';

import './css/App.css';
import Header from "./components/header"
import Footer from "./components/footer"
import Body from "./components/body"

function App() {
  const [theme, setTheme] = useState(["Modo Oscuro", "Modo Claro"])
  const [idioma, setIdioma] = useState([])

  useEffect(() => {
    setTheme(["Modo Oscuro", "Modo Claro"])
    setIdioma(["ESP", "ENG"])
  }, [])


  useEffect(() => {
    console.log("Estamos en la etapa de actualizacion")
  }, [theme, idioma])

  const changeTheme = () => {
    theme.reverse()
  }

  return (
    <div className="App">
      <main className="App-main">

        <div>
          <label className='toggle-modo-oscuro'>
            <button onClick={changeTheme}>  {theme[0]} </button>
          </label>

          <label className='toogle-idioma'>
            <button>{idioma[0]}</button>
          </label>
        </div>

        <Header />
        <br />
        <Body />
        <br />
        <Footer />
        <br />
      </main>
    </div>
  );
}

export default App;
