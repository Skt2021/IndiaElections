import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBhx-holxxegiN3JHuE18jtynT4gs2qo0Y",
    authDomain: "indiaelections-2021.firebaseapp.com",
    projectId: "indiaelections-2021",
    storageBucket: "indiaelections-2021.appspot.com",
    messagingSenderId: "911593136723",
    appId: "1:911593136723:web:813ca25907441e099adca6",
    measurementId: "G-71L1MQFBSB"
  };

  firebase.initializeApp(config);

  export default firebase;