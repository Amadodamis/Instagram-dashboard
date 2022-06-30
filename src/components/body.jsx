import React from 'react';
import '../css/body.css';
import '../css/App.css';

//imports de archivos
import fotouser from '../img/fotouser.png'
import angle from '../icon/angle-left.svg'

//imports de componentes
import DataAnalitycs from './componentsbody/dataAnalitycs';
import User from './componentsbody/User'


function Body() {
  return (
    <div className="body">

      <section className="container-buscar-user">
        <p className='title-buscar-user'>Buscar ID de usuario por Link </p>
        
        <div className='container-search'> 
          <form action="" className='form'>
            <input type="text" placeholder='Ingrese link de usuario' className='input-search' />
            <button type='submit' className='button-search'>Buscar</button>
          </form>
        </div>

        <User fotouser={fotouser} />

      </section>

      <DataAnalitycs angle={angle} fotouser={fotouser} />

    </div>
  );
}

export default Body;