import '../css/body.css';
import '../css/App.css';

//imports de archivos
import fotoUser from '../img/fotouser.png'

//imports de componentes
import DataAnalitycs from './componentsbody/dataAnalitycs';
import BuscarUser from './componentsbody/BuscarUser';

function Body(props) {

  return (
    <div className="body">

      <BuscarUser fotoUser={fotoUser} leng={props.leng} />

      <DataAnalitycs fotoUser={fotoUser} leng={props.leng} />

    </div>
  );
}

export default Body;