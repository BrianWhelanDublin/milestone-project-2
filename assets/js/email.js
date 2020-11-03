const sendMail = (contactForm) => {
  emailjs
    .send("service_v5eulln", "cont-for-m2", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      message: contactForm.message.value,
    })
    .then(
      function (response) {
        alert("SUCCESS", response);
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
    return false;
};
