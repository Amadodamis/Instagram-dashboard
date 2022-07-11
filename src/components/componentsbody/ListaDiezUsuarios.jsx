import React from "react";
import '../../css/App.css';
import '../../css/body.css';

//Este componente solo devuelve un UL con 10 usuarios.

function ListaDiezUsuarios(props) {
    //por props viene un array con 10 usuarios
    const { arrayUsers } = props;
    //Mostrar users es recorre el array y devuelve la lista con todos los users
    const mostrarUsers = arrayUsers.map((user, i) => {
        return (
            <li key={i} className="lista-usuarios">
                {user.img}
                {user.a}
            </li>
        )
    })


    return (
        <div className='list-users'>
            <ul className='ul-style'>
                {mostrarUsers}
            </ul>
        </div>
    );
}

export default ListaDiezUsuarios;
