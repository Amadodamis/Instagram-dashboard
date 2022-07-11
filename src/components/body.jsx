import '../css/body.css';
import '../css/App.css';
import { useState } from 'react';
import arrayUsuariosHardCoded from "./JS/hardCodedusers.js"
//imports de archivos
import fotoUser from '../img/fotouser.png'

//imports de componentes
import DataAnalitycs from './componentsbody/dataAnalitycs';
import BuscarUser from './componentsbody/BuscarUser';

function Body(props) {
  
  const [listUsers,setListUsers]=useState([])
  const [userId,setUserId]=useState(null)
 

  return (
    <div className="body">

      <BuscarUser leng={props.leng} 
       setUserId={setUserId} userId={userId}
       setListUsers={setListUsers} listUsers={listUsers}
      />

      <DataAnalitycs fotoUser={fotoUser} leng={props.leng} arrayUsers={arrayUsuariosHardCoded} />

    </div>
  );
}

export default Body;