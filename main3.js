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

function myFunction() {
    var name = prompt("Please enter your name:");
    var output = document.getElementById("output");
    var message = "Hello, " + name + "! Welcome to my Online Portfolio.";
    output.textContent = message;
}