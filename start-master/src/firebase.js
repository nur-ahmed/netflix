import firebase from "firebase/compat/app";
import "firebase/compat/storage"




const firebaseConfig = {
    apiKey: "AIzaSyAg8SzMgwkpFma6GDX3DWx8swpD9sshSV8",
    authDomain: "startmix-8426b.firebaseapp.com",
    projectId: "startmix-8426b",
    storageBucket: "startmix-8426b.appspot.com",
    messagingSenderId: "845412529957",
    appId: "1:845412529957:web:ef01b30f26fd7019060ccc",
    measurementId: "G-4NT2LVHDCZ"
  }; 

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;