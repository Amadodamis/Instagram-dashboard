import React from 'react';
import '../../css/body.css';
import '../../css/App.css';


import DataAnalyticsArticle from './dataAnalitycsArticle';

function DataAnalytics(props) {
    
    const {leng, arrayUsers} = props;
    
    //textos Data Analytics
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

            <DataAnalyticsArticle arrayUsers={arrayUsers}  p={p1} leng={leng} />

            <DataAnalyticsArticle arrayUsers={arrayUsers}  p={p2} leng={leng}/>

            <DataAnalyticsArticle arrayUsers={arrayUsers}  p={p3}  leng={leng}/>

        </section>

    );
}

export default DataAnalytics;