import '../../css/body.css';
import arrayUsuariosHardCoded from "../JS/hardCodedusers.js"

function SearchButton(props) {
    const { leng, setUserId, setListUsers } = props

    let p1 = "buscar"
    let placeHolder = "Ingrese link de usuario"
    if (leng === "ENG") {
        p1 = "Find"
        placeHolder = "Enter user link"
    }

    const getID = e => {
        e.preventDefault()
        let newID = e.target.newID.value;
        setUserId(newID)
        e.target.newID.value=""
        if(newID==="Gerardo Mocho"){
            setListUsers(arrayUsuariosHardCoded)
        }
        if(newID!=="Gerardo Mocho"){
            setListUsers([])
        }
    }

    return (
        <div className='container-search'>
            <form onSubmit={getID} className='form'>
                <input type="text" name="newID"
                    placeholder={placeHolder} className='input-search' />


                <button type='submit' className='button-search'>{p1} </button>
            </form>
        </div>

    );
}

export default SearchButton;