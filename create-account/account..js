document.getElementById("signupForm").addEventListener("submit", function(e) {

    let name = document.getElementById("name1").value.trim();
    let surname = document.getElementById("Surname").value.trim();
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let gender = document.getElementById("gender").value;
    let contact = document.getElementById("connect").value.trim();
    let password = document.getElementById("password").value;

    if (
        name === "" ||
        surname === "" ||
        !day ||
        !month ||
        !year ||
        !gender ||
        contact === "" ||
        password === ""
    ) {
        alert("Please fill all fields");
        e.preventDefault(); 
    }
    else if (password.length < 6) {
        alert("Password must be at least 6 characters");
        e.preventDefault();
    }
    else {
        console.log("First Name:", name);
        console.log("Surname:", surname);
        console.log("Date of Birth:", day, month, year);
        console.log("Gender:", gender);
        console.log("Contact:", contact);
        console.log("Password:", password);


         // Delay refresh (so you can see console)
        setTimeout(function() {
            location.reload();
        }, 9000); // 1 second delay


    }

});