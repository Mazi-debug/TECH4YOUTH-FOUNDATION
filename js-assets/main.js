/* Code Attribution
   Author: The Independent Institute of Education (IIE)
   Title: IIE Manual 2025
   Date Published: 09/02/2023
   Version: First Edition: 2012
   Link/URL: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/IIE%20Student%20Materials/New%20Student%20Materials%20CAT/WEDE5020/2025/Term%202/WEDE5020MM.docx?d=w2d7589e9374b43de9596ef35d83ebd02&csf=1&web=1&e=yok212
   Date Accessed: 27/08/2025
*/

/* Code Attribution
   Author: Mozilla Developer Network (MDN) Contributors
   Title: JavaScript Guide
   Date Published: 2024
   Link/URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
   Date Accessed: 2025-09-29
*/

/* Code Attribution
   Author: World Wide Web Consortium (W3C)
   Title: Document Object Model (DOM) Level 3 Core Specification
   Date Published: 2023
   Link/URL: https://www.w3.org/TR/DOM-Level-3-Core/
   Date Accessed: 2025-09-29
*/

// ============================
// CONFIRM JAVASCRIPT CONNECTION
// ============================
console.log("JavaScript is connected!");

// ============================
// ACCORDION TOGGLE FUNCTIONALITY
// ============================
// Expands or collapses content panels when the accordion button is clicked.
document.querySelectorAll(".accordion-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.classList.toggle("active");

    let content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// ============================
// LIGHTBOX FUNCTIONALITY
// ============================
// Displays an enlarged version of an image when clicked, with a caption.
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Opens the lightbox when an image in the gallery is clicked.
document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", function () {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    caption.textContent = img.alt;
  });
});

// Closes the lightbox when the close button is clicked.
closeBtn.addEventListener("click", function () {
  lightbox.style.display = "none";
});

// Closes the lightbox when clicking outside the image area.
lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// ============================
// SEARCH FILTER FUNCTIONALITY
// ============================
// Filters list items in real time based on the user's input text.
document.getElementById("searchBox").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let books = document.querySelectorAll("#bookList li");

  books.forEach((i) => {
    let text = i.textContent.toLowerCase();
    i.style.display = text.includes(filter) ? "block" : "none";
  });
});

// ============================
// CONTACT FORM VALIDATION
// ============================
// Validates contact form inputs before submission and provides feedback.
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let feedback = document.getElementById("formFeedback");

  // Simple validation: checks if all fields are filled and email includes "@"
  if (name && email.includes("@") && message.length > 5) {
    feedback.textContent = "Message sent successfully!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Please fill in all fields correctly.";
    feedback.style.color = "red";
  }
});
