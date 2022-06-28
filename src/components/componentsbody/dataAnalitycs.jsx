import React from 'react';
import '../../css/body.css';


function dataAnalytics(props) {
    return (
        
        <section className="data-analitycs">
            <article className='article1'>
                <p className='title'>Usuarios que seguis y no te siguen</p>
                <div className='list-users'>
                    <ul className='ul-style'>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>

                    </ul>

                </div>

                <div className='container-angles'>
                    <img src={props.angle} className="icon-left" alt="logo" />
                    <img src={props.angle} className="icon-right" alt="logo" />
                </div>
            </article>

            <article className='article2'>
                <p className='title'>Usuarios que no seguis y te siguen</p>
                <div className='list-users'>
                    <ul className='ul-style'>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>

                    </ul>

                </div>
                
                <div className='container-angles'>
                    <img src={props.angle} className="icon-left" alt="logo" />
                    <img src={props.angle} className="icon-right" alt="logo" />
                </div>
            </article>

            <article className='article3'>
                <p className='title'>Usuarios que te dejaron de seguir desde la fecha : "*fecha*"</p>
                <div className='list-users'>
                    <ul className='ul-style'>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>
                        <li><img src={props.fotouser} className="avatar-user" alt="userx" /> <a href="https://www.instagram.com/">Hardcoded user</a></li>

                    </ul>

                </div>
                
                <div className='container-angles'>
                    <img src={props.angle} className="icon-left" alt="logo" />
                    <img src={props.angle} className="icon-right" alt="logo" />
                </div>
            </article>

        </section>
        
    );
}

export default dataAnalytics;