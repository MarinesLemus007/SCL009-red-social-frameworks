import React, {useState} from 'react';
import logo from '../img/logo3.png';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import { Redirect } from 'react-router-dom';

function Register(){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleNameChange = evt => {
        const newValue = evt.target.value;
        setName(newValue);
    }

    const handleEmailChange = evt => {
        const newValue = evt.target.value;
        setEmail(newValue);
    }
    
    const handlePasswordChange = evt => {
        const newValue = evt.target.value;
        setPassword(newValue);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
       
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        
        .catch(error => {
            // Handle Errors here.

            // var errorCode = error.code;
            // var errorMessage = error.message;
            
            // ...
          });   
        
          const newValue = true;
            setLoading(newValue);
        // if(i.additionalUserInfo.isNewUser === true){
        // sendEmailVerification();
        // }

        setName("");
        setEmail("");
        setPassword("");
    }

    // function sendEmailVerification(){
    //     // [START sendemailverification]
    //     firebase.auth()
    //     .currentUser.sendEmailVerification()
    //     .then(function() {
    //       // Email Verification sent!
    //       // [START_EXCLUDE]
    //       alert('Email Verification Sent!');
    //       // [END_EXCLUDE]
    //     });
    //     // [END 
    // }

        // useEffect(() => {
        //         firebase.auth()
        //         .createUserWithEmailAndPassword(email, password)
        //     }
        // });
        
    //     catch(error){
    //         // Handle Errors here.
    //         //let errorCode = error.code;
    //         // var errorMessage = error.message;
    //         // ...
    //     };
    // }
    
        return(
            <section className="register-seccion">
                <div className="register-content">    
                
                    <div className="register-logo">
                        <img className="register-img" src={logo} alt="Logo Pet Lovers"/>
                    </div>
                
                    <div id="containerForm" className="register-body">
                    
                        <form className="register-form" value={loading} onSubmit={handleSubmit}>
                            <h2>Formulario de registro</h2>
                            <input type="text" name="name" className="register-nickname" placeholder="Nombre de usuario" autoComplete="off" required value={name} onChange={handleNameChange}/>
                            <input type="email" name="email" className="register-email" placeholder="&#9993; correo@example.com" autoComplete="off" required value={email} onChange={handleEmailChange}/>
                            <input type="password" name="password" className="register-password" placeholder="&#128272; Contraseña" autoComplete="off" required value={password} onChange={handlePasswordChange}/>
                            <input type="submit" value="Registrarse" className="register-button" />
                            {loading ? <Redirect to='/login' /> : <Redirect to='/register' />}
                            <Link to="/" className="link"> <button type="button" className="register-button-two">Volver</button></Link>
                        </form>
                    </div>

                </div>
            </section>
        )
}

export default Register;