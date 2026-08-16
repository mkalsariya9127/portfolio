// Initialize EmailJS
emailjs.init({
    publicKey: "qhsZTTghob1TtprAx"
});


// Contact Form
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    emailjs.sendForm(
        "service_52x1slm",
        "template_9phyg8o",
        this
    )
    .then(function () {

        alert("Message sent successfully!");

        contactForm.reset();

    })
    .catch(function (error) {

        console.log("EmailJS Error:", error);

        alert("Message could not be sent. Please try again.");

    });

});