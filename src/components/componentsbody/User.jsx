import React from 'react';
import '../../css/body.css';


function User(props) {
  const { userId } = props;
  const leng = props.leng;
  let p0 = "ID de usuario: "
  let p1 = "Nombre User: "
  let p2 = "Siguiendo: "
  let p3 = "Seguidores: "
  let p4 = "Es privado: ";
  if (leng === "ENG") {
    p0 = "ID user: "
    p1 = "User Name: "
    p2 = "Following: "
    p3 = "Followers: "
    p4 = "Is private:"
  }



  return (

    <article className='container-info-user-article'>

      {userId !== null &&
        <div className='container-fotouser'>
          <img src={userId.profile_pic_url_hd} className="foto-user" alt="user" />
        </div>
      }

      {userId !== null &&
        <div className='container-info-user'>
          <ul className='ul-style'>
            <li><p className='Datos-user'>{`${p0}${userId.id}`} </p></li>
            <li><p className='Datos-user'>{`${p1}${userId.userName} `} </p></li>
            <li> <p className='Datos-user'>{`${p2}${userId.follow}`}</p></li>
            <li> <p className='Datos-user'>{`${p3}${userId.followed}`} </p></li>
            <li> <p className='Datos-user'>{`${p4}${userId.is_private}`}</p></li>
          </ul>
        </div>
      }
    </article>

  );
}

export default User;