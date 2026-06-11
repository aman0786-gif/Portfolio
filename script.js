// =========================
// Mobile Navbar Toggle
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// =========================
// Close Menu After Clicking Link
// =========================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// =========================
// Contact Form Validation
// =========================

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

  document.getElementById("contactForm").reset();

  return false; // Prevent page reload
}
