(window["webpackJsonpred-social"]=window["webpackJsonpred-social"]||[]).push([[0],{31:function(e,t,a){e.exports=a(47)},36:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(28),s=a.n(l),r=a(4),c=a(9),i=(a(36),a(11)),m=a(12),u=a(15),d=a(13),g=a(5),h=a(14),p=a(8),E=a.n(p),v=a(21),b=a.n(v);a(37),a(39);b.a.initializeApp({apiKey:"AIzaSyBqhKBBY-HUDbCI6059YsmazajHE5j-Q4g",authDomain:"red-social-framework-616ea.firebaseapp.com",databaseURL:"https://red-social-framework-616ea.firebaseio.com",projectId:"red-social-framework-616ea",storageBucket:"red-social-framework-616ea.appspot.com",messagingSenderId:"129135873325",appId:"1:129135873325:web:3a40d88443de1855"});var f=b.a,N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={user:!1,email:"",password:"",loading:!1},a.loginWithGoogle=a.loginWithGoogle.bind(Object(g.a)(a)),a.handleEmail=a.handleEmail.bind(Object(g.a)(a)),a.handlePassword=a.handlePassword.bind(Object(g.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handlePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.state.email,a=this.state.password;f.auth().signInWithEmailAndPassword(t,a).catch(function(e){}),this.setState({loading:!0}),e.preventDefault()}},{key:"loginWithGoogle",value:function(){var e=this,t=new f.auth.GoogleAuthProvider;f.auth().signInWithPopup(t).then(function(t){console.log(t);var a=t.user.I;e.setState({user:t.user.I}),console.log(a)})}},{key:"render",value:function(){return o.a.createElement("section",{className:"login-seccion"},o.a.createElement("div",{className:"login-content"},o.a.createElement("div",{className:"login-logo"},o.a.createElement("img",{className:"login-img",src:E.a,alt:"Logo Pet Lovers"})),o.a.createElement("div",{className:"login-body"},o.a.createElement("form",{className:"login-form",onSubmit:this.handleSubmit},o.a.createElement("input",{type:"email",className:"login-email",placeholder:"\u2709 correo@example.com",value:this.state.email,onChange:this.handleEmail}),o.a.createElement("input",{type:"password",className:"login-password",autoComplete:"on",placeholder:"\ud83d\udd10 Contrase\xf1a",value:this.state.password,onChange:this.handlePassword}),o.a.createElement(r.b,{to:"/forgetpassword",className:"link"},o.a.createElement("p",{className:"login-text"},"\xbfOlvidaste tu contrase\xf1a?")),o.a.createElement("input",{type:"submit",value:"Iniciar sesi\xf3n",className:"login-button"}),o.a.createElement("button",{type:"button",className:"login-button-two",onClick:this.loginWithGoogle},"Iniciar sesi\xf3n con Google"),this.state.user?o.a.createElement(c.a,{to:"/home"}):o.a.createElement(c.a,{to:"/login"}),this.state.loading?o.a.createElement(c.a,{to:"/home"}):o.a.createElement(c.a,{to:"/login"}),o.a.createElement(r.b,{to:"/register",className:"link"},o.a.createElement("p",{className:"login-text-two"},"\xbfNo tienes cuenta? Registrate aqui."))))))}}]),t}(n.Component),w=a(10);var O=function(){var e=Object(n.useState)(""),t=Object(w.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(""),i=Object(w.a)(s,2),m=i[0],u=i[1],d=Object(n.useState)(""),g=Object(w.a)(d,2),h=g[0],p=g[1],v=Object(n.useState)(!1),b=Object(w.a)(v,2),N=b[0],O=b[1];return o.a.createElement("section",{className:"register-seccion"},o.a.createElement("div",{className:"register-content"},o.a.createElement("div",{className:"register-logo"},o.a.createElement("img",{className:"register-img",src:E.a,alt:"Logo Pet Lovers"})),o.a.createElement("div",{id:"containerForm",className:"register-body"},o.a.createElement("form",{className:"register-form",value:N,onSubmit:function(e){e.preventDefault(),f.auth().createUserWithEmailAndPassword(m,h).catch(function(e){});O(!0),l(""),u(""),p("")}},o.a.createElement("h2",null,"Formulario de registro"),o.a.createElement("input",{type:"text",name:"name",className:"register-nickname",placeholder:"Nombre de usuario",autoComplete:"off",required:!0,value:a,onChange:function(e){var t=e.target.value;l(t)}}),o.a.createElement("input",{type:"email",name:"email",className:"register-email",placeholder:"\u2709 correo@example.com",autoComplete:"off",required:!0,value:m,onChange:function(e){var t=e.target.value;u(t)}}),o.a.createElement("input",{type:"password",name:"password",className:"register-password",placeholder:"\ud83d\udd10 Contrase\xf1a",autoComplete:"off",required:!0,value:h,onChange:function(e){var t=e.target.value;p(t)}}),o.a.createElement("input",{type:"submit",value:"Registrarse",className:"register-button"}),N?o.a.createElement(c.a,{to:"/login"}):o.a.createElement(c.a,{to:"/register"}),o.a.createElement(r.b,{to:"/",className:"link"}," ",o.a.createElement("button",{type:"button",className:"register-button-two"},"Volver"))))))};var y=function(e){return o.a.createElement("section",{className:"forgetpassword-seccion"},o.a.createElement("div",{className:"forgetpassword-content"},o.a.createElement("div",{className:"forgetpassword-logo"},o.a.createElement("img",{className:"forgetpassword-img",src:E.a,alt:"Logo Pet Lovers"})),o.a.createElement("div",{id:"containerForm",className:"forgetpassword-body"},o.a.createElement("form",{className:"forgetpassword-form"},o.a.createElement("h2",null,"Reestablecer contrase\xf1a"),o.a.createElement("h4",null,"Por favor ingrese su email"),o.a.createElement("input",{type:"email",className:"forgetpassword-email",id:"emailResetPassword",placeholder:"\u2709 correo@example.com",name:"email"}),o.a.createElement("button",{type:"button",className:"forgetpassword-button",id:"btn_reset_pass",value:"Cambiar Contrase\xf1a"},"Cambiar Contrase\xf1a"),o.a.createElement(r.b,{to:"/",className:"link"},o.a.createElement("button",{type:"button",className:"forgetpassword-button-two",id:"returnlogin"},"Volver"))))))};var C=function(){var e=f.firestore(),t=f.auth().currentUser,a=Object(n.useState)(""),l=Object(w.a)(a,2),s=l[0],r=l[1];return o.a.createElement("div",{className:"home-body"},o.a.createElement("form",{className:"home-form",onSubmit:function(a){a.preventDefault();var n=t.uid;e.collection("POST").add({uid:n,post:s}).then(function(e){console.log(s),console.log("Document written with ID: ",e.id)}).catch(function(e){console.error("Error adding document: ",e)}),r("")}},o.a.createElement("div",{className:"home-post"},o.a.createElement("div",{className:"home-text"},"Nombre de usuario"),o.a.createElement("textarea",{type:"text",className:"home-input",placeholder:"\xbfQu\xe9 est\xe1s pensando?",value:s,onChange:function(e){var t=e.target.value;r(t)}})),o.a.createElement("div",{className:"home-body-button"},o.a.createElement("input",{type:"submit",className:"home-button",id:"sendpost",value:"Publicar"}))))},j=f.firestore(),P=f.auth().currentUser;console.log(P);var k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).editPost=function(e){a.setState({edit:e})},a.deletePost=function(e){j.collection("POST").doc(e).delete().then(function(){console.log("Document successfully deleted!")}).catch(function(e){console.error("Error removing document: ",e)})},a.handleNewPostChange=function(e){a.setState({newPost:e.target.value})},a.actionEdit=function(e){j.collection("POST").doc(e).update({post:a.state.newPost})},a.state={post:[],edit:"",newPost:""},a.handleNewPostChange=a.handleNewPostChange.bind(Object(g.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.collection("POST").onSnapshot(function(t){e.setState({post:t.docs.map(function(e){return{id:e.id,data:e.data().post}})})})}},{key:"render",value:function(){var e=this,t=this.state.post,a=this.state.edit,n=this.state.newPost;return console.log(n),console.log(a),t&&void 0!==t?t.map(function(t){return o.a.createElement("div",{className:"wall-body",key:t.id},o.a.createElement("div",{className:"wall-form"},o.a.createElement("div",{className:"wall-post"},o.a.createElement("div",{className:"wall-text"},"nombre"),o.a.createElement("div",{className:"wall-input"},a===t.id?o.a.createElement("input",{type:"text",className:"wall-input-edit",value:n,onChange:e.handleNewPostChange}):o.a.createElement("p",null,t.data))),o.a.createElement("div",{className:"wall-body-button"},o.a.createElement("div",{className:"wall-heart"},o.a.createElement("i",{className:"fas fa-heart"})),o.a.createElement("div",{className:"wall-edit"},a===t.id?o.a.createElement("button",{onClick:function(){return e.actionEdit(t.id)}},"editar"):o.a.createElement("button",{className:"wall-edit-button",onClick:function(){return e.editPost(t.id)}},o.a.createElement("i",{className:"fas fa-edit"}))),o.a.createElement("div",{className:"wall-remove"},o.a.createElement("button",{onClick:function(){return e.deletePost(t.id)}},o.a.createElement("i",{className:"fas fa-trash-alt"}))))))}):o.a.createElement("p",null)}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={loadingTwo:!1},a.stateChanged=a.stateChanged.bind(Object(g.a)(a)),a.signOut=a.signOut.bind(Object(g.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"stateChanged",value:function(){f.auth().onAuthStateChanged(function(e){if(e){console.log(e);var t=e.displayName;console.log(t);var a=e.email;console.log(a);var n=e.emailVerified;console.log(n);var o=e.photoURL;console.log(o);var l=e.isAnonymous;console.log(l);var s=e.uid;console.log(s);var r=e.providerData;console.log(r)}else console.log("adios")})}},{key:"signOut",value:function(){var e=this;f.auth().signOut().then(function(){e.setState({loadingTwo:!0})}).catch(function(e){})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"home-seccion"},o.a.createElement("nav",{id:"site-nav",className:"home-nav"},o.a.createElement("div",{className:"home-logo"},o.a.createElement("img",{src:E.a,className:"home-img",alt:"Logo Pet Lovers"})),o.a.createElement("div",{className:"home-options"},o.a.createElement("div",{className:"home-options-one"},"Mi perfil"),o.a.createElement("div",{className:"home-options-two"},"Muro"),o.a.createElement("button",{className:"home-options-three",onClick:this.signOut},"Cerrar sesi\xf3n"),this.state.loadingTwo?o.a.createElement(c.a,{to:"/login"}):o.a.createElement(c.a,{to:"/home"}),this.state.loadingTwo?o.a.createElement(c.a,{to:"/login"}):this.stateChanged()))),o.a.createElement("section",{className:"home-seccion-two"},o.a.createElement(C,null),o.a.createElement(k,null)))}}]),t}(n.Component),x=(a(46),o.a.createElement(r.a,null,o.a.createElement(c.d,null,o.a.createElement(c.b,{path:"/login",component:N}),o.a.createElement(c.b,{path:"/register/",component:O}),o.a.createElement(c.b,{path:"/forgetpassword/",component:y}),o.a.createElement(c.b,{path:"/home/",component:S}),o.a.createElement(c.a,{from:"/",to:"/login"}))));s.a.render(x,document.getElementById("root"))},8:function(e,t,a){e.exports=a.p+"static/media/logo3.b9709521.png"}},[[31,1,2]]]);
//# sourceMappingURL=main.4bdb596e.chunk.js.map