import React from 'react';
import logo from '../img/logo3.png';
import { Link } from 'react-router-dom';

function ForgetPassword(props){
    return(   
            <section className="forgetpassword-seccion">
                <div className="forgetpassword-content">
                    
                    <div className="forgetpassword-logo">
                        <img className="forgetpassword-img" src={logo} alt="Logo Pet Lovers"/>
                    </div>
                
                    <div id="containerForm" className="forgetpassword-body">
                        <form className="forgetpassword-form">
                            <h2>Reestablecer contraseña</h2>
                            <h4>Por favor ingrese su email</h4>
                            <input type="email" className="forgetpassword-email" id="emailResetPassword" placeholder="&#9993; correo@example.com" name="email"/>
                            <button type="button" className="forgetpassword-button" id="btn_reset_pass" value="Cambiar Contraseña">Cambiar Contraseña</button>
                            <Link to="/" className="link"><button type="button" className="forgetpassword-button-two" id="returnlogin">Volver</button></Link>
                        </form>
                    </div>

                </div>
            </section>
    );
}

export default ForgetPassword;