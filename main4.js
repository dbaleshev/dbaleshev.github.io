function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function mOut(some_tag) {
    some_tag.innerHTML = "Mouse over the text";
    some_tag.style.color = "orange";
}

function mOver(some_tag) {
    some_tag.innerHTML = "Hire Me";
    some_tag.style.color = "blue";
}


function anotherFunction() {
    var name = prompt("Please enter your name:");
    var output = document.getElementById("output");
    var message = "Hello, " + name + "! Welcome to my Online Portfolio.";
    output.textContent = message;   // Reference: OpenAl. (2024). ChatGPT (February 2024 version) [Large language model]. Code correctness check. https://chat.openai.com/chat
}




window.onload = function() {
    var user = document.getElementById("funame");
    console.log(user.value); // the user input value.
    console.log(user.type); // the type of the form element.
}

function inputHandler() {
    var myvalue = document.getElementById("funame").value;
    document.getElementById("emptyParagraph").innerHTML = "Your Input: " + myvalue;
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Store input values in localStorage
    var formElements = document.getElementById("myForm").elements;
    for (var i = 0; i < formElements.length; i++) {
        var element = formElements[i];
        if (element.type !== "submit" && element.type !== "reset") {
            localStorage.setItem(element.name, element.value);
        }
    }

    // Log stored values to the console
    for (var j = 0; j < localStorage.length; j++) {
        var key = localStorage.key(j);
        console.log(key + ": " + localStorage.getItem(key));
    }
});
