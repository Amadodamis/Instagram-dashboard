import '../css/footer.css';
import '../css/App.css';
let cv = "https://docs.google.com/document/d/1ijwQMEoZboJ1PKr8eO-NbcJm1FwuJqaPWepFb_ggaO4/edit?usp=sharing"
let gh = "https://github.com/Amadodamis/"

function Footer() {
  return (
    <footer className="footer">
      <div className='container-links'>
        <a href={gh} className='Links-footer'><p>Github AmadoDamis</p></a>
        <a href="/" className='Links-footer'><p>Linkedin AmadoDamis</p></a>
        <a href={cv} className='Links-footer'><p>CV AmadoDamis</p></a>
        <a href="/" className='Links-footer'><p>Recursos utilizados</p></a>
      </div>

    </footer>
  );
}

export default Footer;