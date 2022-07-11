import React from 'react';
import '../../css/body.css';


function User(props) {
  const {userId}=props;
  const leng = props.leng;
  let p0 = "ID de usuario"
  let p1 = "Nombre User:"
  let p2 = "Siguiendo:"
  let p3 = "Seguidores:"
  let p4 = "Creacion Instagram:";
  if (leng === "ENG") {
    p0 = "ID user"
    p1 = "User Name:"
    p2 = "Following:"
    p3 = "Followers:"
    p4 = "Instagram creation:"
  }
  

  return (

    <article className='container-info-user-article'>
    
      <div className='container-fotouser'>
        <img src={props.fotoUser} className="foto-user" alt="user" />
      </div>
    
      <div className='container-info-user'>
        <ul className='ul-style'>
          <li><p className='Datos-user'>{`${p0} 654115631`} </p></li>
          <li><p className='Datos-user'>{`${p1} Gerardo Mocho`} </p></li>
          <li> <p className='Datos-user'>{`${p2} 1500`}</p></li>
          <li> <p className='Datos-user'>{`${p3}15000`} </p></li>
          <li> <p className='Datos-user'>{`${p4} 20/12/2018`}</p></li>
        </ul>
      </div>
      
    
    </article>

  );
}

export default User;