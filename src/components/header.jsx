import logoIg from '../img/instagram_logo.png'
import '../css/header.css';


function Header() { 
    return (
        <header>
            <div className='container-img'>
            <img src={logoIg} className="logo" alt="logo"/>
            </div>
      </header>
    );
  }
  
  export default Header;