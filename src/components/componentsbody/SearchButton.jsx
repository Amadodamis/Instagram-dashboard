import '../../css/body.css';
import arrayUsuariosHardCoded from "../JS/hardCodedusers.js"
import fotoUser from "../../img/fotouser.png"

function SearchButton(props) {
    const { leng, userId, setUserId, setListUsers } = props

    let p1 = "buscar"
    let placeHolder = "Ingrese link de usuario"
    if (leng === "ENG") {
        p1 = "Find"
        placeHolder = "Enter user link"
    }

    const getID = e => {
        e.preventDefault()
        // falta logica para comprobar si el usuario existe
        let newUserName = e.target.newUserName.value

        //Crea el objeto que va a ser pusheado en el UserID
        let newUser = {
            newUserName: newUserName,
            id: "1646135",
            is_private: false,
            profile_pic_url_hd: fotoUser,
            follow: 4656,
            followed: 6544,
        }
        setUserId(newUser)

        e.target.newUserName.value = ""

        //HardCoded de la lista de usuarios si el usuario se encontro
        if (newUser.newUserName === "Gerardo Mocho") {
            setListUsers(arrayUsuariosHardCoded)
        }

        //Si se presiona nuevamente en el boton, se limpia la lista de usuarios
        if (newUser.newUserName !== "Gerardo Mocho") {
            setListUsers([])
        }
    }

    return (
        <div className='container-search'>
            <form onSubmit={getID} className='form'>
                <input type="text" name="newUserName"
                    placeholder={placeHolder} className='input-search' />
                <button type='submit' className='button-search'>{p1} </button>
            </form>
        </div>

    );
}

export default SearchButton;