// ========================================
// Restaurant Website JavaScript
// ========================================


// 1. Automatically update copyright year
const currentYear = new Date().getFullYear();

const copyrightText = document.querySelector(".footer-bottom p");

if (copyrightText) {
    copyrightText.innerHTML =
        `© ${currentYear} Bella Restaurant. All Rights Reserved.`;
}


// 2. Welcome message when page loads
window.addEventListener("load", function () {

    console.log("Welcome to Bella Restaurant!");

});


// 3. Book a Table button interaction
const bookingButtons = document.querySelectorAll(
    'a[href="reservation.html"]'
);

bookingButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        console.log("Opening reservation page...");

    });

});