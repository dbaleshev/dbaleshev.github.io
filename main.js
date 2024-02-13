var greeting = "Hello ";

var name = "Class"; //we are defining name here

alert(greeting + name);

username = window.prompt("What is Your Name?");

function changebackground (color) {
    document.body.style.background = color
}

window.addEventListener("load", function() {changebackground('blue')});

console.log(username);


for (let i = 0; i < 5; i++) {
    alert("Hello")
}

function myFunction(){
    alert("Hello!");
    }

function mOver(some_tag) {
        some_tag.innerHTML = "Thank You”;
        some_tag.style.color = "blue";
    }
        
function mOut(element) {
     some_tag.innerHTML = "Mouse Over Me";
      some_tag.style.color = "orange";
    }