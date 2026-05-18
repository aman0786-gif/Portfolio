function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("msg").value.trim();

    if (name === "" || email === "" || msg === "") {
        alert("Please fill all fields!");
        return false;
    }

    console.log("------ Form Data ------");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", msg);
    console.log("-----------------------");

    alert("Form Submitted Successfully ✅");


    // Form reset (empty)
    document.getElementById("contactForm").reset();

    return false; // page reload nahi hoga
}