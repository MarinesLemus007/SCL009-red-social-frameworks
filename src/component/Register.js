import React from 'react';
import logo from '../img/logo3.png';
import { Link } from 'react-router-dom';

function Register(props){
    return(
        <section className="register-seccion">
            <div className="register-content">    
                
                <div className="register-logo">
                    <img className="register-img" src={logo} alt="Logo Pet Lovers"/>
                </div>
                
                <div id="containerForm" className="register-body">
                    
                    <form className="register-form">
                        <h2>Formulario de registro</h2>
                        <input type="text" className="register-nickname" id="nickname" placeholder="Nombre de usuario" name="nickname"/>
                        <input type="email" className="register-email" id="email" placeholder="&#9993; correo@example.com" name="email"/>
                        <input type="password" className="register-password" id="password" placeholder="&#128272; Contraseña" name="password"/>
                        <input type="password" className="register-password-two" id="password_repeat" placeholder="&#128272; Repetir contraseña" name="password"/>
                        <button type="button" className="register-button" id="btn-checkin2">Registrarse</button>
                        <Link to="/" className="link"> <button type="button" className="register-button-two" id="back">Volver</button></Link>
                    </form>

                </div>

            </div>
        </section>
    );
}

export default Register;