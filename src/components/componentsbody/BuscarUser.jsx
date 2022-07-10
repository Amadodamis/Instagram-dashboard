import '../../css/body.css';
import User from './User';

function BuscarUser(props) {
    return (
        <section className="container-buscar-user">
            <p className='title-buscar-user'>Buscar ID de usuario por Link </p>

            <div className='container-search'>
                <form action="" className='form'>
                    <input type="text" placeholder='Ingrese link de usuario' className='input-search' />
                    <button type='submit' className='button-search'>Buscar</button>
                </form>
            </div>

            <User fotoUser={props.fotoUser} />

        </section>

    );
}

export default BuscarUser;