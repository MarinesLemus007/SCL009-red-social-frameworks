import React, {Component} from 'react';
import logo from '../img/logo3.png';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import { Redirect } from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {user:false, email:'', password:'', loading:false};
    
        this.loginWithGoogle = this.loginWithGoogle.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleEmail(event) {
        this.setState({email: event.target.value});
      }
      
    handlePassword(event) {
        this.setState({password: event.target.value});
    }
    
    handleSubmit(event) {

        let email = this.state.email;
        let password = this.state.password;

        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error =>{
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // ...
          });
        
        this.setState({loading: true});

        event.preventDefault();
    }

    loginWithGoogle(){
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then(result => {
            console.log(result);
            // let token = result.credential.accessToken;
            // let user = result.user;
        let user = result.user.I;
        this.setState({
            user : result.user.I
        });
        console.log(user);
        // if(user===true){
        //     ReactDOM.render(
        //     <Redirect to='/home' />
        //     );
        //}
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
                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <input type="email" className="login-email" placeholder="&#9993; correo@example.com" value={this.state.email} onChange={this.handleEmail}/>
                            <input type="password" className="login-password"  autoComplete="on" placeholder="&#128272; Contraseña"  value={this.state.password} onChange={this.handlePassword}/>
                            <Link to="/forgetpassword" className="link"><p className="login-text">¿Olvidaste tu contraseña?</p></Link>
                            <input type="submit" value="Iniciar sesión" className="login-button" />
                            <button type="button" className="login-button-two" onClick={this.loginWithGoogle}>Iniciar sesión con Google</button>
                            {this.state.user? <Redirect to='/home' /> : <Redirect to='/login' />}
                            {this.state.loading? <Redirect to='/home' /> : <Redirect to='/login' />}
                            <Link to="/register" className="link"><p className="login-text-two">¿No tienes cuenta? Registrate aqui.</p></Link>
                        </form>
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;