import firebase from "firebase/compat/app"
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeK-rsgkO-GR_dCMXTSDlVMcDaY4nGFvI",
  authDomain: "robinhood-6ecb8.firebaseapp.com",
  projectId: "robinhood-6ecb8",
  storageBucket: "robinhood-6ecb8.appspot.com",
  messagingSenderId: "449954279229",
  appId: "1:449954279229:web:6244ab3f2d559ae1fadf54"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };




