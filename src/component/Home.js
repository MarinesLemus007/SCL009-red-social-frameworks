import React from 'react';
import logo from '../img/logo3.png';
import { Link } from 'react-router-dom';

function Home(props){
    return(
        <>
            <header className="home-seccion">

                <nav id="site-nav" className="home-nav">
                                    
                    <div className="home-logo">
                        <img src={logo} className="home-img" alt="Logo Pet Lovers"/>
                    </div>

                    <div className="home-options">
                        <div className="home-options-one">Mi perfil</div>
                        <div className="home-options-two">Muro</div>
                        <Link to="/" className="link"><div className="home-options-three">Cerrar sesión</div></Link>
                    </div>                
                                
                </nav>
                      
            </header> 

            <section className="home-seccion-two">
                <div className="home-body">
                    
                    <form className="home-form">

                        <div className="home-post">
                            <div className="home-text">Nombre de usuario</div>
                            <textarea id="post" className="home-input" placeholder="¿Qué estás pensando?"></textarea>
                        </div>

                        <div className="home-body-button">
                            <button className="home-button" type="button"  id="sendpost">Publicar</button>
                        </div>

                    </form>   

                </div>
            </section>
        </>    
    );
}
    
export default Home;