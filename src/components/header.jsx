import logoIgWhite from '../img/instagram_logo_white.png'
import logoIgBlack from '../img/instagram_logo_black.png'
import '../css/header.css';


function Header() {
  return (
    <header className='style-header'>
      <div className='banner'>

        <div className='container-logo-analytics'>
          <div className='container-img'>
            <img src={logoIgBlack} className="logo" alt="logo" />
          </div>
          <p className='Contlogo'>Analytics</p>

        </div>
        
        <div>
          <label className='toggle-modo-oscuro'>
            <input type="radio" name="modo-oscuro" value="ENG" />
            modo oscuro
            <input type="radio" name="modo-oscuro" value="ESP" checked />
            modo claro
          </label>

          <label className='toogle-idioma'>
            <input type="radio" name="idioma" value="ENG" />
            ENG
            <input type="radio" name="idioma" value="ESP" checked />
            ESP
          </label>
        </div>

      </div>
    </header>
  );
}

export default Header;