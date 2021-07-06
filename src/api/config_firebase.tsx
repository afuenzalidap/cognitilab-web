import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBsc4DXIr11Y9LJ2XC7xbt48_WYlSF-uWE",
    authDomain: "cognitilab-1b15a.firebaseapp.com",
    projectId: "cognitilab-1b15a",
    storageBucket: "cognitilab-1b15a.appspot.com",
    messagingSenderId: "559276849536",
    appId: "1:559276849536:web:804a7cebc42ff4f457a965",
    measurementId: "G-EM0N95GRL8"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
    db,
    firebase
}