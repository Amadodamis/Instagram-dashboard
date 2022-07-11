//import logoIgWhite from '../img/instagram_logo_white.png'
import logoIgBlack from '../img/instagram_logo_black.png'
import '../css/header.css';
import "../css/App.css"

function Header() {
  
  return (
    <header className='style-header'>
      <div className='banner'>

        <div className='container-logo-analytics'>
          <div className='container-img'>
            <img src={logoIgBlack} className="logo" alt="logo" />
          </div>
          <p className='analitycs-p' >Analytics</p>

        </div>

      </div>
    </header>
  );
}

export default Header;