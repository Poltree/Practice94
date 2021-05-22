var firebaseConfig = {
    apiKey: "AIzaSyBhkgbfUiPvWJemIjynR_WN9JSK6TA7How",
    authDomain: "kwitter-6708b.firebaseapp.com",
    projectId: "kwitter-6708b",
    storageBucket: "kwitter-6708b.appspot.com",
    messagingSenderId: "814784792088",
    appId: "1:814784792088:web:152d2d0b064b54b05b656d",
    measurementId: "G-9YZMS8HMG9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding"
    });
}