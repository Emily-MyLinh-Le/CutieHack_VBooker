import app from 'firebase/app';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyAyK94AFjfgIepSaaSn5pzkmWk5yke0QJk",
        authDomain: "vbooker-d7624.firebaseapp.com",
        databaseURL: "https://vbooker-d7624.firebaseio.com",
        projectId: "vbooker-d7624",
        storageBucket: "vbooker-d7624.appspot.com",
        messagingSenderId: "650668137780"
  };
  class Firebase {
    constructor() {
        app.initializeApp(config);
 
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
 
    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
  }
   
  export default Firebase;