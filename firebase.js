import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBA5g9R75aW4jLnaD6dRM597kGVts_JIEI",
    authDomain: "whatsappclone-89350.firebaseapp.com",
    projectId: "whatsappclone-89350",
    storageBucket: "whatsappclone-89350.appspot.com",
    messagingSenderId: "196777123261",
    appId: "1:196777123261:web:2859bb2e066065e76246d4"
  };


const app = !firebase.apps.length? 
firebase.initializeApp(firebaseConfig):
 firebase.app();

 const db = firebase.firestore();
 const auth = app.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

 export { db , auth , provider};
