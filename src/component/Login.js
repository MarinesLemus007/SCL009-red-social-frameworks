import React, {Component} from 'react';
import logo from '../img/logo3.png';
import { Link } from 'react-router-dom';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component{
    render(){
        const { user, signOut, signInWithGoogle} = this.props;
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
                            <button className="login-button-two" onClick={signInWithGoogle}>Iniciar sesión con Google</button>
                            <Link to="/register" className="link"><p className="login-text-two">¿No tienes cuenta? Registrate aqui.</p></Link>
                        </form>
                    </div>
                    { user ? <p>Hello, {user.displayName}</p>: <p>Please sign in.</p>}
                </div>
            </section>
        );
    }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Login);
// export default Login;