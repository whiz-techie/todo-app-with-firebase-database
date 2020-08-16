var list = document.getElementById("list");
var firebaseConfig = {
    apiKey: "AIzaSyDukqBhPU5ciFlJWrT4V9vAg-ivRAptOpw",
    authDomain: "todo-app-firebase-databa-b43f5.firebaseapp.com",
    databaseURL: "https://todo-app-firebase-databa-b43f5.firebaseio.com",
    projectId: "todo-app-firebase-databa-b43f5",
    storageBucket: "todo-app-firebase-databa-b43f5.appspot.com",
    messagingSenderId: "851864516700",
    appId: "1:851864516700:web:1e2ae59a137ad6a0ed8e99",
    measurementId: "G-YQWKQQ01B5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.database().ref("todo").on('child_added', function(data){
    var k = Object.keys(data.val())
    console.log(data.val().k)
    var todo = document.getElementById("todo")
    var litext = document.createTextNode(data.val());
   var li = document.createElement("li");
    li.appendChild(litext);
    list.appendChild(li);
     var delbtn = document.createElement("button");
    var deltext = document.createTextNode("delete")
    delbtn.setAttribute("class", "btn")
    delbtn.setAttribute("onclick", "deleteitem(this)")
    delbtn.appendChild(deltext);
    li.appendChild(delbtn);
})


function addtodo (){
    var key = firebase.database().ref("todo").push().key;
    firebase.database().ref("todo").child(key).push(todo.value);
}

function deleteitem(e) {
// e.parentNode().remove();

}
function deleteall() {
   firebase.database().ref("todo").remove()
}












