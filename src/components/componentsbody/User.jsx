import React from 'react';
import '../../css/body.css';


function dataAnalytics(props) {
    return (
        
        <article className='container-info-user-article'>

          <div className='container-fotouser'>
            <img src={props.fotouser} className="foto-user" alt="user" />
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
        
    );
}

export default dataAnalytics;