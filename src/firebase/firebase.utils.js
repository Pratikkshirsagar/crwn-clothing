import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA_JzCR2dBv8khOchHd_Mg99OJ93WBILY4',
  authDomain: 'test-ocr-259809.firebaseapp.com',
  databaseURL: 'https://test-ocr-259809.firebaseio.com',
  projectId: 'test-ocr-259809',
  storageBucket: 'test-ocr-259809.appspot.com',
  messagingSenderId: '276072172556',
  appId: '1:276072172556:web:1fe08277fc7a2891c57229',
  measurementId: 'G-KJP10X8HLD'
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
