// const admin = require('firebase-admin');

// const serviceAccount = require('./path/to/serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const db = admin.firestore();

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAJd02D_vzcvGoK6_dWcAfLJhjPlpykVw8",
    authDomain: "streak-cd4d1.firebaseapp.com",
    databaseURL: "https://streak-cd4d1-default-rtdb.firebaseio.com",
    projectId: "streak-cd4d1",
    storageBucket: "streak-cd4d1.appspot.com",
    messagingSenderId: "16910682487",
    appId: "1:16910682487:web:77cc3af93fe99f175e7972"
};
// Initialize Firebase
const initApp = firebase.initializeApp(firebaseConfig);
const auth = initApp.auth();
const db = initApp.firestore();