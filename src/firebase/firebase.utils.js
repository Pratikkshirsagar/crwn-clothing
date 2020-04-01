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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
