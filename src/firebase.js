import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC3ZnFk5qfpgwbGBg022nYGLcZd5TeJOi8",
    authDomain: "red-social-laboratoria-ea8f4.firebaseapp.com",
    databaseURL: "https://red-social-laboratoria-ea8f4.firebaseio.com",
    projectId: "red-social-laboratoria-ea8f4",
    storageBucket: "red-social-laboratoria-ea8f4.appspot.com",
    messagingSenderId: "62105361806",
    appId: "1:62105361806:web:4f45636c2bd7e2ca"
};

firebase.initializeApp(config);

export default firebase;