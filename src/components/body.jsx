import '../css/body.css';
import fotouser from '../img/fotouser.png'
import angle from '../icon/angle-left.svg'


function Body() {
  return (
    <body className="body">

      <section className="container-buscar-user">
        <p className='title-buscar-user'>Buscar ID de usuario por Link </p>
        <div className='box-search-submit'>
          <input type="search" />
          <input type="submit" />
        </div>

        <article className='container-info-user-article'>

          <div className='container-fotouser'>
            <img src={fotouser} className="foto-user" alt="user" />
          </div>

          <div className='container-info-user'>
            <ul className='ul-style'>
              <li><p>Nombre user:---</p></li>
              <li> <p>Siguiendo:--- </p></li>
              <li> <p>Seguidores:---</p></li>
              <li> <p>Creacion instagram:---</p></li>
            </ul>
          </div>

        </article>

      </section>

      <section className="data-analitycs">
        <article className='article1'>
          <p className='title'>Usuarios que seguis y no te siguen</p>
          <div className='list-users'>
            <ul className='ul-style'>
              <li><img src={fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
              <li><img src={fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
              <li><img src={fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
              <li><img src={fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
              <li><img src={fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
              <li><img src={fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
              <li><img src={fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
              <li><img src={fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
              <li><img src={fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
              <li><img src={fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
              
            </ul>

          </div>
          <div className='container-angles'>
            <img src={angle} className="icon-left" alt="logo" />
            <img src={angle} className="icon-right" alt="logo" />
          </div>
        </article>
        <article className='article2'>
          <p className='title'>Usuarios que no seguis y te siguen</p>

        </article>
        <article className='article3'>
          <p className='title'>Usuarios que te dejaron de seguir desde la fecha : "*fecha*"</p>
        </article>
      </section>

    </body>
  );
}

export default Body;