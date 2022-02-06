import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBX1cDkBNmFjkvkj6BpHWuxdAZAhbJB9a0",
    authDomain: "finance-tracker-8d121.firebaseapp.com",
    projectId: "finance-tracker-8d121",
    storageBucket: "finance-tracker-8d121.appspot.com",
    messagingSenderId: "972551247991",
    appId: "1:972551247991:web:8e5422a05b784d850c4e72"
};

// Initialize Firebase
const projectFirestore = firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }