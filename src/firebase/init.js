import firebase from 'firebase/app'
import firestore from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAQNj_FDGaAw_JBWVxnnVgD15lr2CZuZo0",
    authDomain: "smoothies-26b32.firebaseapp.com",
    databaseURL: "https://smoothies-26b32.firebaseio.com",
    projectId: "smoothies-26b32",
    storageBucket: "smoothies-26b32.appspot.com",
    messagingSenderId: "304167777711",
    appId: "1:304167777711:web:65304fb3500f600e3b6b5a"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()