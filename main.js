var arr = []; // Initialize an empty array

// Accessing array elements by index
var arr = ["apple", "mango", "cherry"]; // Array with elements
alert(arr[0]); // Alerts "apple"
alert(arr[1]); // Alerts "mango"
alert(arr[2]); // Alerts "cherry"
  
// Adding elements to the array using push() method
var arr = []; // Reinitialize an empty array
var a = document.getElementById("mydiv"); // Get a div element
arr.push(a); // Push the div element into the array
var b = document.getElementById("yourdiv"); // Get another div element
arr.push(b); // Push the other div element into the array
  
// Removing elements from the array using pop() method
a = arr.pop(); // Remove the last element ("yourdiv") and assign it to 'a'
alert(a); // Alerts the variable 'a', which contains the div element "yourdiv"


window.onload=function(){
    var user = document.getElementById("username");
    console.log(user.value); // the user input value.
    console.log(user.type); // the type of the form element.
    }


    <input type="text" id="myinput" oninput="inputHandler()">
<p id="emptyParagraph">Dynamically change on webpage input without
prompt</p>
function inputHandler()
{
var myvalue = document.getElementById("myinput").value;
document.getElementById("emptyParagraph").innerHTML = "Your Input:
" + myvalue;
}

localStorage.setItem("username", "marijn"); // store the items
console.log(localStorage.getItem("username"));// → marijn
localStorage.removeItem("username"); // remove from the localstorage