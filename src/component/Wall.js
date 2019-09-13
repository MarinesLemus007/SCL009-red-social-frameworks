import React, { Component } from 'react';
import firebase from '../firebase';

class Wall extends Component {
    
    state= {post:[]}
    
  
    componentDidMount(){
        let db = firebase.firestore();
        let user = firebase.auth().currentUser;
        console.log(user);
    
        db.collection("POST").get().then((snapShot) => {
            
            this.setState({

                post: snapShot.docs.map(doc =>{
                     
                     return {id:doc.id, data:doc.data().post}
                })        
            })
        })
    }
       
    render(){
        const{post}=this.state;
        return(
            post && post !== undefined? post.map((el)=>
            // <section className="wall-seccion">
                <div className="wall-body" key={el.id}>

                    <div className="wall-form">

                        <div className="wall-post"> 
                            <div className="wall-text">Nombre de usuario</div>
                            <div className="wall-input">
                                <p>{el.data}</p>
                            </div>
                        </div>

                        <div className="wall-body-button">
                            <div className="wall-heart">
                                <i className="fas fa-heart"></i>
                            </div>
                            <div className="wall-edit">
                                <i className="fas fa-edit"></i>
                            </div>
                            <div className="wall-remove">
                                <i className="fas fa-trash-alt"></i>
                            </div>
                        </div>

                    </div>   

                </div>): <p></p>
            // </section>
        )
    }
}

export default Wall;