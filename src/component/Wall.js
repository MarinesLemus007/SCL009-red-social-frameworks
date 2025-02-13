import React, { Component } from 'react';
import firebase from '../firebase';

let db = firebase.firestore();
let user = firebase.auth().currentUser;
console.log(user);

class Wall extends Component {
    constructor(props){
    super(props);
    this.state= {post:[], edit:'', newPost:''};

    this.handleNewPostChange = this.handleNewPostChange.bind(this);
   
}
   
    componentDidMount(){
       
        db.collection("POST").onSnapshot((snapShot) => {
            
            this.setState({

                post: snapShot.docs.map(doc =>{
                     
                     return {id:doc.id, data:doc.data().post}
                })        
            })
        })
    }

    editPost = (id)=>{
        this.setState({
            edit:id
        })
    }

    deletePost=(id)=>{
        db.collection("POST").doc(id).delete()
        .then(()=> {
            console.log("Document successfully deleted!");
        }).catch((error)=> {
            console.error("Error removing document: ", error);
        });
    }

    handleNewPostChange=(event)=>{
        this.setState({
            newPost:event.target.value
        })
    }

    actionEdit=(id)=>{
        db.collection("POST").doc(id).update({
            post:this.state.newPost
        })
    }
       
    render(){
        const{post}=this.state;
        const{edit}=this.state;
        const{newPost}=this.state;
        console.log(newPost)
        console.log(edit)
        return(
            post && post !== undefined? post.map((el)=>
            // <section className="wall-seccion">
                <div className="wall-body" key={el.id}>

                    <div className="wall-form">

                        <div className="wall-post"> 
                            <div className="wall-text">nombre</div>
                            <div className="wall-input">
                               { edit === el.id ? <input type="text"  className="wall-input-edit" value={newPost} onChange={this.handleNewPostChange}/> : <p>{el.data}</p>}
                            </div>
                        </div>

                        <div className="wall-body-button">
                            <div className="wall-heart">
                                <i className="fas fa-heart"></i>
                            </div>
                            <div className="wall-edit">
                                {edit === el.id ? <button onClick={()=>this.actionEdit(el.id)}>editar</button> : <button className="wall-edit-button" onClick={()=> this.editPost(el.id)}><i className="fas fa-edit"></i></button>}
                            </div>
                            <div className="wall-remove">
                                <button onClick={()=> this.deletePost(el.id)}><i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>

                    </div>   

                </div>): <p></p>
            // </section>
        )
    }
}

export default Wall;