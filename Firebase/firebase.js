import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyC271CGqadKdfKyAvs-BzRwTGnq8U0p-F8",
  authDomain: "financesapp-2594f.firebaseapp.com",
  projectId: "financesapp-2594f",
  storageBucket: "financesapp-2594f.appspot.com",
  messagingSenderId: "178081899691",
  appId: "1:178081899691:web:223daf632bcee26e3cc3ee"
};


firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

export {database};