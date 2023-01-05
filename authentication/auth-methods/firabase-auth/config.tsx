import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAKDO11S6mjigu4kKS9oGwhFjOZBTDESms',
  authDomain: 'taxeezy-90af6.firebaseapp.com',
  projectId: 'taxeezy-90af6',
  storageBucket: 'taxeezy-90af6.appspot.com',
  messagingSenderId: '412249019683',
  appId: '1:412249019683:web:0d4be8614eef076293a896',
  measurementId: 'G-23TN8RG7GL',
};

const app = initializeApp(config);
const auth = getAuth(app);

export default auth ;
