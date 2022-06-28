import React from 'react';
import '../../css/body.css';
import HardcodedUsers from './hardcodedUsers'

let ant = "<< Anterior"
let sig = " Siguiente >>"


function dataAnalytics(props) {
    return (

        <section className="data-analitycs">
            <article className='article1'>
                <div className='container-p'>
                    <p className='title'>Usuarios que seguis y no te siguen</p>
                </div>

                <div className='list-users'>
                    <ul className='ul-style'>
                        <HardcodedUsers fotouser={props.fotouser}/>
                    </ul>

                </div>

                <div className='container-ant-sig'>
                    <button className='button-prev-next'> {ant} </button>
                    <button className='button-prev-next'> {sig} </button>
                </div>

            </article>

            <article className='article2'>
                <p className='title'>Usuarios que no seguis y te siguen</p>
                <div className='list-users'>
                    <ul className='ul-style'>
                    <HardcodedUsers fotouser={props.fotouser}/>
                    </ul>

                </div>

                <div className='container-angles'>
                    <button className='button-prev-next'> {ant} </button>
                    <button className='button-prev-next'> {sig} </button>
                </div>

            </article>

            <article className='article3'>
                <p className='title'>Usuarios que te dejaron de seguir desde la fecha : "*fecha*"</p>
                <div className='list-users'>
                    <ul className='ul-style'>
                    <HardcodedUsers fotouser={props.fotouser}/>
                    </ul>

                </div>

                <div className='container-angles'>
                    <button className='button-prev-next'> {ant} </button>
                    <button className='button-prev-next'> {sig} </button>
                </div>
            </article>

        </section>

    );
}

export default dataAnalytics;