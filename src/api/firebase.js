import Firebase from 'firebase';

let config = {
  apiKey: "AIzaSyBUA-37LZjZdmTo_cKU_u3o9BvEIonisv4",
  authDomain: "notes-app-2bf03.firebaseapp.com",
  databaseURL: "https://notes-app-2bf03.firebaseio.com",
  projectId: "notes-app-2bf03",
  storageBucket: "notes-app-2bf03.appspot.com",
  messagingSenderId: "166830691170"
};

const firebase = Firebase.initializeApp(config);
// const firebaseDb = firebase.database();
// firebaseDb.ref('notes/').once('value').then(snapshot => snapshot.forEach(child => console.log(child.key)));

export const login = (username, password) => {
  return firebase.auth().signInWithEmailAndPassword(username, password);
};

export default firebase;
