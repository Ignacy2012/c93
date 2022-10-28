
//ADD YOUR FIREBASE LINKS HERE
welcome = localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML = "welcome " + welcome;

function addRoom(){
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout() {
      localStorage.removeItem("user_name");
      window.location = "index.html";
}


