//YOUR FIRE BASE LINKS

const firebaseConfig = {
  apiKey: "AIzaSyB3CuJz07VS7XVh_7kt5ZjcMzzqSJJDgVI",
  authDomain: "test-9037c.firebaseapp.com",
  databaseURL: "https://test-9037c-default-rtdb.firebaseio.com",
  projectId: "test-9037c",
  storageBucket: "test-9037c.appspot.com",
  messagingSenderId: "409774551680",
  appId: "1:409774551680:web:331b0a0f0d331631edec65",
  measurementId: "G-NV8CPD78YD"
};


  firebase.initializeApp(firebaseConfig);
  

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location="index.html";
}
