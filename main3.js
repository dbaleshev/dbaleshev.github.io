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

function mOver(some_tag) {
    some_tag.innerHTML = "Thank You";
    some_tag.style.color = "blue";
}

function mOut(some_tag) {
    some_tag.innerHTML = "Mouse Over Me";
    some_tag.style.color = "orange";
}

window.onload = function() {
    var nameButton = document.getElementById("nameButton");
    var outputEl = document.getElementById("output");

nameButton.onclick = function() {
    var name = prompt("Please enter your name:");
    var message = "Hello, " + name + "! Welcome to my Online Portfolio.";
    outputEl.textContent = message;
};
};

