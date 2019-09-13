import React, {Component} from 'react';
import logo from '../img/logo3.png';
import { Redirect } from 'react-router-dom';
import firebase from '../firebase';
import Post from './Post';
import Wall from './Wall';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {loadingTwo:false};

        this.stateChanged = this.stateChanged.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    stateChanged(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
               
                // User is signed in.
                console.log(user);
                var displayName = user.displayName;
                console.log(displayName);
                var email = user.email;
                console.log(email);
                var emailVerified = user.emailVerified;
                console.log(emailVerified);
                var photoURL = user.photoURL;
                console.log(photoURL);
                var isAnonymous = user.isAnonymous;
                console.log(isAnonymous);
                var uid = user.uid;
                console.log(uid);
                var providerData = user.providerData;
                console.log(providerData);
                // ...
            }
            else {
                console.log("adios");
                // User is signed out.
                // ...
            }
      });
    }

    signOut(){
       
        firebase.auth().signOut()
        .then(()=>{
       
            this.setState({
                loadingTwo : true
            });
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
        });
    }

    render(){
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
                            <button className="home-options-three" onClick={this.signOut}>Cerrar sesión</button>
                            {this.state.loadingTwo? <Redirect to='/login' /> : <Redirect to='/home' />}
                            {this.state.loadingTwo? <Redirect to='/login' /> : this.stateChanged()}
                        </div>                
                                
                    </nav>
                      
                </header> 
                <section className="home-seccion-two">
                    <Post/>
                    <Wall/>
                </section>
            </>    
        );
    }
}
    
export default Home;