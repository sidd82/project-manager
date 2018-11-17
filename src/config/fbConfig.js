 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDspZRY_CrYlmga9Fr3o-UMEKHOkEg2BfU",
    authDomain: "my-mario-plan.firebaseapp.com",
    databaseURL: "https://my-mario-plan.firebaseio.com",
    projectId: "my-mario-plan",
    storageBucket: "my-mario-plan.appspot.com",
    messagingSenderId: "524252157138"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;