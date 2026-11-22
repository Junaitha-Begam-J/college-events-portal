

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const selectedEvent = document.getElementById("eventName").value;

    const message = document.getElementById("message");

    message.textContent = "Thank you, " + name +
        "! You have successfully registered for " + selectedEvent + ".";

    form.reset();
});
