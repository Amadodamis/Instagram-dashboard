import '../css/body.css';
import fotouser from '../img/fotouser.png'

function Body() {
  return (
    <body className="body">
      <section className="seccion1">
        <h3>Buscar ID de usuario por Link </h3>
        <input type="search" />
        <br />
        <input type="submit" />
        <br />
        <div className='container-fotouser'>
          <img src={fotouser} className="foto-user" alt="user" />
        </div>
      </section>

      <section className="seccion2">
        <article className='articles'>
          <p className='title'>Usuarios que seguis y no te siguen</p>

        </article>
        <article className='articles'>
          <p className='title'>Usuarios que no seguis y te siguen</p>

        </article>
        <article className='articles'>
          <p className='title'>Usuarios que te dejaron de seguir desde la fecha : "*fecha*"</p>
        </article>
      </section>

    </body>
  );
}

export default Body;