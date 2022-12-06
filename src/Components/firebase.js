import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 
const firebaseConfig = {
    apiKey: "AIzaSyD45F00re1UHwL2Aud_vaj7-T49w_7XJRU",
    authDomain: "netflix-clone-5d47d.firebaseapp.com",
    projectId: "netflix-clone-5d47d",
    storageBucket: "netflix-clone-5d47d.appspot.com",
    messagingSenderId: "959597427385",
    appId: "1:959597427385:web:a162c47faf66e45173b968"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export { auth,db };
 