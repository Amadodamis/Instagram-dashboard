import '../../css/body.css';
import User from './User';

function BuscarUser(props) {
    const {fotoUser,leng}=props;
    let p1="Buscar ID de usuario por Link"
    let p2="Buscar"
    let placeHolder="Ingrese link de usuario"

    if (leng==="ENG"){
        p1="Find User ID by Link"
        p2="Find"
        placeHolder="Enter user link"
    }

    return (
        <section className="container-buscar-user">
            <p className='title-buscar-user'>{p1}</p>

            <div className='container-search'>
                <form action="" className='form'>
                    <input type="text" placeholder={placeHolder} className='input-search' />
                    <button type='submit' className='button-search'>{p2} </button>
                </form>
            </div>

            <User fotoUser={fotoUser} leng={leng} />

        </section>

    );
}

export default BuscarUser;