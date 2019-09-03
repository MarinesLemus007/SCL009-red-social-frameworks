import React from 'react';
import logo from '../img/logo3.png';
import { Link } from 'react-router-dom';
import '../App.css';

function Login(props){
    return(
        
         <section className="login-seccion">
            <div className="login-content">
                
                <div className="login-logo">
                    <img className="login-img" src={logo} alt="Logo Pet Lovers"/>
                </div>
            
                <div className="login-body">
                    <form className="login-form">
                        <input type="email" className="login-email" placeholder="&#9993; correo@example.com" name="email"/>
                        <input type="password" className="login-password" placeholder="&#128272; Contraseña" name="password"/>
                        <a href="#/resetPassword" id="changePassword" className="login-text">¿Olvidaste tu contraseña?</a>
                        <button type="button" className="login-button" id="btn-login" value="Iniciar sesión">Iniciar sesión</button>
                        <button type="button" className="login-button-two" id="buttonGoogle" value="Iniciar sesión con Google">Iniciar sesión con Google</button>
                        <Link to="/register" className="link"><p className="login-text-two">¿No tienes cuenta? Registrate aqui.</p></Link>
                    </form>
                </div>

            </div>
        </section>
        
    );
}

export default Login;