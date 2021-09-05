import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDExRJk7RTrx7g-Ds36KaNPOT2YFvluL2Q",
    authDomain: "odca-chat.firebaseapp.com",
    projectId: "odca-chat",
    storageBucket: "odca-chat.appspot.com",
    messagingSenderId: "45644930537",
    appId: "1:45644930537:web:c7b3a143d829714fae3f78"
}).auth();
