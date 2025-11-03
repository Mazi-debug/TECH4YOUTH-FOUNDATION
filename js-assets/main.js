console.log("JavaScript is connected!");

// Accordion
document.querySelectorAll(".accordion-btn").forEach((btn) => { //Selects all elements with class accordion-btn.

  /*Loops through each button and adds a click listener.
On click: Toggles the class "active" (you can use this in CSS for styling open/closed buttons).
 */
  btn.addEventListener("click", function() {
    btn.classList.toggle("active");

    /* Selects the next element (nextElementSibling) which is the accordion content.
Checks if it’s visible:
If display is "block", hide it ("none")
If hidden, show it ("block") */
    let content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click",function() {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    caption.textContent = img.alt;
  });
});

closeBtn.addEventListener("click", function() {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", function(e) {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Search & Filtering
document.getElementById("searchBox").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let books = document.querySelectorAll("#bookList li");

  books.forEach(i => {
    let text = i.textContent.toLowerCase();
    i.style.display = text.includes(filter) ? "block" : "none";
  });
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let feedback = document.getElementById("formFeedback");

  if (name && email.includes("@") && message.length > 5) {
    feedback.textContent = "Message sent successfully!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Please fill in all fields correctly.";
    feedback.style.color = "red";
  }
});