function sendNewsletter(form) {
  emailjs
    .send("brianwhelandublin", "newsletter", {
      "from_email": form.email.value,
    })
    .then(
      function (response) {
        alert("SUCCESS", response);
        form.reset();
      },
      function (error) {
        alert("Something went wrong Please try again", error);
      }
    );
  return false;
}

function sendMail(contactForm) {
  emailjs
    .send("brianwhelandublin", "cont-for-m2", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.email.value,
      "message": contactForm.message.value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
        $("#myModal").modal({ show: true });
        contactForm.reset();
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
  return false; // To block from loading a new page
}
