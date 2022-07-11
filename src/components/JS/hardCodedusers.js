import fotoUser from "../../img/fotouser.png"

const usuario = {
    img: <img src={fotoUser} className="avatar-user" alt="userx" />,
    a: <a href="https://www.instagram.com/" className='a-usuario'>Hardcoded user</a>
}
const usuario2 = {
    img: <img src={fotoUser} className="avatar-user" alt="userx" />,
    a: <a href="https://www.instagram.com/" className='a-usuario'>Gerardo</a>
}
const arrayUsuariosHardCoded = [usuario, usuario2, usuario, usuario, usuario2, usuario, usuario, usuario2, usuario, usuario, usuario, usuario2, usuario, usuario2, usuario, usuario, usuario2, usuario2, usuario, usuario2, usuario, usuario2, usuario, usuario2,]

export default arrayUsuariosHardCoded