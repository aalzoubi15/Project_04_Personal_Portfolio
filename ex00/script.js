const themeButton = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    themeButton.textContent = isDarkMode
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";

    themeButton.setAttribute("aria-pressed", isDarkMode);
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formStatus.textContent =
        "The form passed validation. This demo does not send messages to a server. Please contact me by email.";

    contactForm.reset();
});