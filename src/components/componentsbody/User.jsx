import React from 'react';
import '../../css/body.css';


function User(props) {
  return (

    <article className='container-info-user-article'>

      <div className='container-fotouser'>
        <img src={props.fotoUser} className="foto-user" alt="user" />
      </div>

      <div className='container-info-user'>
        <ul className='ul-style'>
          <li><p className='Datos-user'>Nombre user: Amado Damis</p></li>
          <li> <p className='Datos-user'>Siguiendo: 200 </p></li>
          <li> <p className='Datos-user'>Seguidores: 200</p></li>
          <li> <p className='Datos-user'>Creacion instagram: 20/12/2022</p></li>
        </ul>
      </div>

    </article>

  );
}

export default User;