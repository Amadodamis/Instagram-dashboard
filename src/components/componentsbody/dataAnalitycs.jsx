import React from 'react';
import '../../css/body.css';
import '../../css/App.css';

import DataAnalyticsArticle from './dataAnalitycsArticle';

function DataAnalytics(props) {

    const p1 = "Usuarios que seguis y no te siguen"
    const p2 = "Usuarios que no seguis y te siguen"
    const p3 = "Usuarios que te dejaron de seguir desde la *fecha*"
   

    //Array hardcodeado de Users
    const { fotoUser } = props;

    const usuario = {
        img: <img src={fotoUser} className="avatar-user" alt="userx" />,
        a: <a href="https://www.instagram.com/" className='a-usuario'>Hardcoded user</a>
    }
    const usuario2 = {
        img: <img src={fotoUser} className="avatar-user" alt="userx" />,
        a: <a href="https://www.instagram.com/" className='a-usuario'>Gerardo</a>
    }
    const arrayUsuariosHardCoded = [usuario, usuario2, usuario, usuario, usuario2, usuario, usuario, usuario2, usuario, usuario, usuario, usuario2, usuario, usuario2, usuario, usuario, usuario2, usuario2, usuario, usuario2, usuario, usuario2, usuario, usuario2,]



    return (

        <section className="data-analitycs">

            <DataAnalyticsArticle arrayUsuariosHardCoded={arrayUsuariosHardCoded} fotoUser={fotoUser} p={p1}  />

            <DataAnalyticsArticle arrayUsuariosHardCoded={arrayUsuariosHardCoded} fotoUser={fotoUser} p={p2} />

            <DataAnalyticsArticle arrayUsuariosHardCoded={arrayUsuariosHardCoded} fotoUser={fotoUser} p={p3}  />

        </section>

    );
}

export default DataAnalytics;