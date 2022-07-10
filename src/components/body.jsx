import '../css/body.css';
import '../css/App.css';

//imports de archivos
import fotoUser from '../img/fotouser.png'

//imports de componentes
import DataAnalitycs from './componentsbody/dataAnalitycs';
import BuscarUser from './componentsbody/BuscarUser';

function Body() {

  return (
    <div className="body">
      <BuscarUser fotoUser={fotoUser} />
      <DataAnalitycs fotoUser={fotoUser} />

    </div>
  );
}

export default Body;