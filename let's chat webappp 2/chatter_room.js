const firebaseConfig = {
    apiKey: "AIzaSyA2pmFqInXcUgtSWd9soBQFvknWOttRj64",
    authDomain: "chatter-8ec55.firebaseapp.com",
    databaseURL: "https://chatter-8ec55-default-rtdb.firebaseio.com",
    projectId: "chatter-8ec55",
    storageBucket: "chatter-8ec55.appspot.com",
    messagingSenderId: "706279454265",
    appId: "1:706279454265:web:c304adedb7a2f011773fe8",
    measurementId: "G-W38G6NNGRP"

  };
  firebase.initializeApp(firebaseConfig)
  function addRoom() {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"add room name"
    })
    localStorage.setItem("room_name",room_name)
    window.location="chatter_page.html";
      }         
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
       console.log(Room_names);  
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML +=row; 
    //End code
    });});}
getData();
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name",name)
    window.location="chatter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
     window.location="chatter.html"
}

