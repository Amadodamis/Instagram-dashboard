import React from 'react';
import '../css/body.css';

//imports de archivos
import fotouser from '../img/fotouser.png'
import angle from '../icon/angle-left.svg'

//imports de componentes
import DataAnalitycs from './componentsbody/dataAnalitycs';
import User from './componentsbody/User'


function Body() {
  return (
    <body className="body">

      <section className="container-buscar-user">
        <p className='title-buscar-user'>Buscar ID de usuario por Link </p>
        <div className='box-search-submit'>
          <input type="search" />
          <input type="submit" />
        </div>

        <User fotouser={fotouser} />

      </section>

      <DataAnalitycs angle={angle} fotouser={fotouser} />

    </body>
  );
}

export default Body;