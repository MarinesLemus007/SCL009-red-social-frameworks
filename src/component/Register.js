import React, {Component} from 'react';
import logo from '../img/logo3.png';
import { Link } from 'react-router-dom';
// import firebase from '../firebase';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {email:'', password:''};
        this. mySubmitHandler = this. mySubmitHandler.bind(this);
        // this.registerWithEmailAndPassword =  this.registerWithEmailAndPassword.bind(this);
        this.handleEmail =  this.handleEmail.bind(this);
        this.handlePassword =  this.handlePassword.bind(this);
    }

    handleEmail(event){
        this.setState({email: event.target.value});
    }

    handlePassword(event){
         this.setState({password: event.target.value});
    }

    mySubmitHandler(event){
        alert("You are submitting " + this.state.email);
         event.preventDefault();
      }

    // registerWithEmailAndPassword(event){
    //     event.preventDefault();
    //     let email = this.state.email;
    //     let password = this.state.password;
    //     console.log(email);
    //     firebase.auth()
    //     .createUserWithEmailAndPassword(email, password)
    //     .catch(error => {
    //         // Handle Errors here.
    //         // var errorCode = error.code;
    //         // var errorMessage = error.message;
    //         // ...
    //     });
    // }

    render(){
        return(
            <section className="register-seccion">
                <div className="register-content">    
                
                    <div className="register-logo">
                        <img className="register-img" src={logo} alt="Logo Pet Lovers"/>
                    </div>
                
                    <div id="containerForm" className="register-body">
                    
                        <form className="register-form" onSubmit={this.mySubmitHandler}>
                            <h2>Formulario de registro</h2>
                            <input type="text" className="register-nickname" id="nickname" placeholder="Nombre de usuario" autoComplete="off" required/>
                            <input type="email" className="register-email" id="email" placeholder="&#9993; correo@example.com" autoComplete="off" required value={this.state.email} onChange={this.props.handleEmail}/>
                            <input type="password" className="register-password" id="password" placeholder="&#128272; Contraseña" autoComplete="off" required value={this.state.password} onChange={this.props.handlePassword}/>
                            <input type="submit" value="Registrarse" className="register-button" id="btn-checkin2"/>
                            <Link to="/" className="link"> <button type="button" className="register-button-two" id="back">Volver</button></Link>
                        </form>
                    </div>

                </div>
            </section>
        );
    }
}

export default Register;