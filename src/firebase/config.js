import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDp-BO5SS1684KAVdBzCtNGXnAZhAs1fj4',
  authDomain: 'meraki-e4d2a.firebaseapp.com',
  databaseURL: 'https://meraki-e4d2a.firebaseio.com',
  projectId: 'meraki-e4d2a',
  storageBucket: 'meraki-e4d2a.appspot.com',
  messagingSenderId: '178647260994',
  appId: '1:178647260994:web:e798ed392ad6960c92f2db',
};

firebase.initializeApp(firebaseConfig);
firebase.auth();
export default firebase;
