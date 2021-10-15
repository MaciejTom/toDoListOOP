var config = {
    apiKey: "AIzaSyBJAHBu300-BbRvCQJPyYSXe54JDwZERjk",
    authDomain: "todo-app-oop.firebaseapp.com",
    databaseURL: "https://todo-app-oop-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-app-oop",
    storageBucket: "todo-app-oop.appspot.com",
    messagingSenderId: "528083640150",
    appId: "1:528083640150:web:4498139cca2f4334a800f7",
    measurementId: "G-23HXWJJ59N"
  };
    firebase.initializeApp(config);
    
    // Get a reference to the database service
    var database = firebase.database();