import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBqhKBBY-HUDbCI6059YsmazajHE5j-Q4g",
    authDomain: "red-social-framework-616ea.firebaseapp.com",
    databaseURL: "https://red-social-framework-616ea.firebaseio.com",
    projectId: "red-social-framework-616ea",
    storageBucket: "red-social-framework-616ea.appspot.com",
    messagingSenderId: "129135873325",
    appId: "1:129135873325:web:3a40d88443de1855"
};

firebase.initializeApp(config);

export default firebase;