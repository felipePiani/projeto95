// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbdURXzO10vQEzxWQZcrAuiggHeKtZDW0",
  authDomain: "kwitter-ebf10.firebaseapp.com",
  databaseURL: "https://kwitter-ebf10-default-rtdb.firebaseio.com",
  projectId: "kwitter-ebf10",
  storageBucket: "kwitter-ebf10.appspot.com",
  messagingSenderId: "498221781343",
  appId: "1:498221781343:web:8d2672a40bbce9621526ea"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem vindo(a)" + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adicionar sala"
  });
  localStorage.setItem("room_name", "room_name");
  window.location = "KwitterPage.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData()
function redirectToRoomName() {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "KwitterPage.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}