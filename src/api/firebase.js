import Firebase from 'firebase';
import { v4 } from 'node-uuid';
const FIREBASE_DB_NAME = '/notes';

let config = {
  apiKey: "AIzaSyBUA-37LZjZdmTo_cKU_u3o9BvEIonisv4",
  authDomain: "notes-app-2bf03.firebaseapp.com",
  databaseURL: "https://notes-app-2bf03.firebaseio.com",
  projectId: "notes-app-2bf03",
  storageBucket: "notes-app-2bf03.appspot.com",
  messagingSenderId: "166830691170"
};


const firebase = Firebase.initializeApp(config);

export const login = (username, password) => {
  return firebase.auth().signInWithEmailAndPassword(username, password);
};

const getNotes = (firebaseNotes) => {
  let notes = [];
  Object.keys(firebaseNotes.val()).forEach(id => {
    notes.push({
      id: id,
      text: firebaseNotes.val()[id].text
    });
  });
  console.log(notes);
  return notes;
}

export const asyncGetNotes = () => {
  return new Promise((resolve, reject) => {
    firebase.database().ref(FIREBASE_DB_NAME).on('value', rawNotes => resolve(getNotes(rawNotes)));
  });
}

export const asyncCreateNotes = (text) => {
  const id = v4();
  const notes = {
    id,
    text
  };

  return new Promise((resolve, reject) => {
    firebase.database().ref(FIREBASE_DB_NAME + '/' + id).set({ text }, error => {
      if (error) {
        reject(error);
      } else {
        resolve(notes);
      }
    });
  });
}

export const asyncDeleteNotes = (id) => {
  return new Promise((resolve, reject) => firebase.database()
    .ref(FIREBASE_DB_NAME)
    .child(id)
    .set(null, error => {
      if (error) {
        reject(error);
      } else {
        resolve(id);
      }
    }));
}

export default firebase;
