function sendMail(contactForm) {
    emailjs.send("brianwhelandublin","cont-for-m2", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            alert("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}