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
    document.getElementById("myForm").addEventListener("input", inputHandler);  // Reference: OpenAl. (2024). ChatGPT (March 2024 version) [Large language model]. Adding input event listener based on guidance from ChatGPT. https://chat.openai.com/chat
}


    function inputHandler() {
        var fullName = document.getElementById("funame").value;
        document.getElementById("fullnameOutput").innerHTML = "Your Input for Full Name is: " + fullName;
        localStorage.setItem("fullName", fullName); // Reference: OpenAl. (2024). ChatGPT (March 2024 version) [Large language model]. Replaced from back of the JS to here. https://chat.openai.com/chat
        console.log(localStorage.getItem("fullName")); 

        var position = document.getElementById("positionInput").value;
        document.getElementById("positionOutput").innerHTML = "Your Input for Current Role: " + position;
        localStorage.setItem("currentPosition", position);
        console.log(localStorage.getItem("currentPosition"));
    
        var experience = document.getElementById("experience").value;
        document.getElementById("experienceOutput").innerHTML = "Your Input for Experience: " + experience;
        localStorage.setItem("experience", experience);
        console.log(localStorage.getItem("experience"));
    
        var edulevel = document.getElementById("edulevel").value;
        document.getElementById("edulevelOutput").innerHTML = "Your Input for Education Level: " + edulevel;
        localStorage.setItem("edulevel", edulevel);
        console.log(localStorage.getItem("edulevel"));
    
        var skills = []; // Reference: OpenAl. (2024). ChatGPT (March 2024 version) [Large language model]. Used to resolve an issue with saving multiple selections from the form. https://chat.openai.com/chat
        var skillsInputs = document.getElementsByName("skills");
        skillsInputs.forEach(function(input) {
            if (input.checked) {
                skills.push(input.value);
            }
        });
    
        document.getElementById("skillsOutput").innerHTML = "Your Selected Skills: " + skills.join(", ");
        localStorage.setItem("skills", skills.join(", "));
        console.log(localStorage.getItem("skills"));
    
        var certification = document.querySelector('input[name="choice"]:checked')?.value || "";
        document.getElementById("certificationOutput").innerHTML = "Your Selected Certification: " + certification;
        localStorage.setItem("certification", certification);
        console.log(localStorage.getItem("certification"));

        var favcolour = document.getElementById("favcolour").value;
        document.getElementById("favcolourOutput").innerHTML = "Your Favorite Color is: " + favcolour;
        localStorage.setItem("favcolour", favcolour);
        console.log(localStorage.getItem("favcolour"));
        
        var rate = document.getElementById("rate").value;
        document.getElementById("rateOutput").innerHTML = "Your Rating: " + rate;
        localStorage.setItem("rate", rate);
        console.log(localStorage.getItem("rate"));

        var volume = document.getElementById("vol").value;
        document.getElementById("voluneraneoutput").textContent = "Your rating for the content quality is: " + volume;
        localStorage.setItem("contentQualityRating", volume);
        
        var date = document.getElementById("date").value;
        document.getElementById("dateOutput").innerHTML = "Today's Date is: " + date;
        localStorage.setItem("date", date);
        console.log(localStorage.getItem("date"));
    }