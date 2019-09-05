import React, {Component} from 'react';
import logo from '../img/logo3.png';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import 'firebase/auth';

class Login extends Component{
    constructor(props){
        super(props);
        this.loginWithGoogle = this.loginWithGoogle.bind(this);
    }
       

    loginWithGoogle(){
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => {
            console.log(result);
            
            // let token = result.credential.accessToken;
            // let user = result.user;

        })//.catch(function(error) {
        //     let errorCode = error.code;
        //     let errorMessage = error.message;
        //     let email = error.email;
        //     let credential = error.credential;
        // });
    }

    render(){
        
        return ( 
            <section className="login-seccion">
                <div className="login-content">
                
                    <div className="login-logo">
                        <img className="login-img" src={logo} alt="Logo Pet Lovers"/>
                    </div>
            
                    <div className="login-body">
                        <form className="login-form">
                            <input type="email" className="login-email" placeholder="&#9993; correo@example.com" name="email"/>
                            <input type="password" className="login-password" placeholder="&#128272; Contraseña" name="password"/>
                            <Link to="/forgetpassword" className="link"><p className="login-text">¿Olvidaste tu contraseña?</p></Link>
                            <Link to="/home" className="link"><button type="button" className="login-button" id="btn-login" value="Iniciar sesión">Iniciar sesión</button></Link>
                            <button type="button" className="login-button-two" onClick={this.loginWithGoogle}>Iniciar sesión con Google</button>
                            <Link to="/register" className="link"><p className="login-text-two">¿No tienes cuenta? Registrate aqui.</p></Link>
                        </form>
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;