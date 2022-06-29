//import logoIgWhite from '../img/instagram_logo_white.png'
import logoIgBlack from '../img/instagram_logo_black.png'
import '../css/header.css';


function Header(props) {

  return (
    <header className='style-header'>
      <div className='banner'>

        <div className='container-logo-analytics'>
          <div className='container-img'>
            <img src={logoIgBlack} className="logo" alt="logo" />
          </div>
          <p className='Contlogo'>Analytics</p>

        </div>

      </div>
    </header>
  );
}

export default Header;