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
//   fetching from firebase
firebase.database().ref("todo").on('child_added', function(data){
    var todo = document.getElementById("todo")
    var litext = document.createTextNode(data.val().value);
    var li = document.createElement("li");
    li.appendChild(litext);
    list.appendChild(li);
    // delete btn
    var delbtn = document.createElement("button");
    var deltext = document.createTextNode("delete")
    delbtn.setAttribute("class", "btn")
    delbtn.setAttribute("id",data.val().key)
    delbtn.setAttribute("onclick", "deleteitem(this)")
    delbtn.appendChild(deltext);
    li.appendChild(delbtn);
    // edit btn
    var editbtn = document.createElement("button");
    var edittext = document.createTextNode("edit todo")
    editbtn.setAttribute("class", "btn")
    editbtn.setAttribute("id",data.val().key)
    editbtn.setAttribute("onclick", "edititem(this)")
    editbtn.appendChild(edittext);
    li.appendChild(editbtn);
})
//  add todo
function addtodo (){
    var todos = document.getElementById("todo")
    var key = firebase.database().ref("todo").push().key;
    var todo = {
        value:todos.value,
        key:key
    }
    firebase.database().ref("todo").child(key).set(todo);
    todos.value = "";
}
// delete todo
function deleteitem(e) {
firebase.database().ref("todo").child(e.id).remove();
e.parentNode.remove()
}
// delete all
function deleteall() {
   firebase.database().ref("todo").remove()
   list.innerHTML="";
}
// edit todo
function edititem(e) {
    var edit = prompt("Edit todo task")
    var newtodo = {
        value:edit,
        key:e.id
    }
    firebase.database().ref("todo").child(e.id).set(newtodo);
   e.parentNode.firstChild.nodeValue = edit

 }












