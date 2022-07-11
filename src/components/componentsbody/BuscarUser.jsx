import '../../css/body.css';
import User from './User';
import SearchButton from './SearchButton';
import fotoUser from '../../img/fotouser.png' //partial

function BuscarUser(props) {
    const {leng,userId,setUserId,listUsers,setListUsers}=props;
    
    let p1="Buscar ID de usuario por Link"
    if (leng==="ENG"){ p1="Find User ID by Link"}


    return (
        <section className="container-buscar-user">

            <p className='title-buscar-user'>{p1}</p>

            <SearchButton 
            leng={leng} 
            userId={userId} setUserId={setUserId} 
            listUsers={listUsers} setListUsers={setListUsers}
            /> 

            <User userId={userId} leng={leng} />

        </section>

    );
}

export default BuscarUser;