import React from 'react';
import '../../css/body.css';
import '../../css/App.css';

import DataAnalyticsArticle from './dataAnalitycsArticle';

function DataAnalytics(props) {
  
    //Array hardcodeado de Users
    const { fotoUser,leng } = props;
    
    const usuario = {
        img: <img src={fotoUser} className="avatar-user" alt="userx" />,
        a: <a href="https://www.instagram.com/" className='a-usuario'>Hardcoded user</a>
    }
    const usuario2 = {
        img: <img src={fotoUser} className="avatar-user" alt="userx" />,
        a: <a href="https://www.instagram.com/" className='a-usuario'>Gerardo</a>
    }
    const arrayUsuariosHardCoded = [usuario, usuario2, usuario, usuario, usuario2, usuario, usuario, usuario2, usuario, usuario, usuario, usuario2, usuario, usuario2, usuario, usuario, usuario2, usuario2, usuario, usuario2, usuario, usuario2, usuario, usuario2,]
    
    let p1 = "Usuarios que seguis y no te siguen"
    let p2 = "Usuarios que no seguis y te siguen"
    let p3 = "Usuarios que te dejaron de seguir desde la *fecha*"
    if (leng==="ENG"){
        p1="Users you follow and do not follow you"
        p2="Users you don't follow and they follow you"
        p3="Users who unfollowed you since *date*"

    }


    return (

        <section className="data-analitycs">

            <DataAnalyticsArticle arrayUsuariosHardCoded={arrayUsuariosHardCoded} fotoUser={fotoUser} p={p1} leng={leng} />

            <DataAnalyticsArticle arrayUsuariosHardCoded={arrayUsuariosHardCoded} fotoUser={fotoUser} p={p2} leng={leng}/>

            <DataAnalyticsArticle arrayUsuariosHardCoded={arrayUsuariosHardCoded} fotoUser={fotoUser} p={p3}  leng={leng}/>

        </section>

    );
}

export default DataAnalytics;