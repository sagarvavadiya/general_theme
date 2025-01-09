import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Replace with your own Firebase configuration from the Firebase Console
const firebaseConfig = {
  apiKey: 'AIzaSyBNZcSyBugtLaB3-B4IOLgi9o374MikmT8',
  authDomain: 'vuexyui.firebaseapp.com',
  projectId: 'vuexyui',
  storageBucket: 'vuexyui.appspot.com',
  messagingSenderId: '562373594438',
  appId: '1:562373594438:web:5a260adb3d82f897916947',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };

// // app/firebase.js
// import { initializeApp } from 'firebase/app';
// import { getDatabase } from 'firebase/database';

// // Your Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyBNZcSyBugtLaB3-B4IOLgi9o374MikmT8',
//   authDomain: 'vuexyui.firebaseapp.com',
//   projectId: 'vuexyui',
//   storageBucket: 'vuexyui.appspot.com',
//   messagingSenderId: '562373594438',
//   appId: '1:562373594438:web:5a260adb3d82f897916947',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Realtime Database
// const database = getDatabase(app);

// export { database };
