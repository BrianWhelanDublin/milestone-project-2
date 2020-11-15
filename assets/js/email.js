function sendNewsletter(form) {
  emailjs
    .send("brianwhelandublin", "newsletter", {
      "from_email": form.email.value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
        $("#newsletterModal").modal({show:true});
        form.reset();
      },
      function (error) {
        alert("Something went wrong Please try again");
         console.log("FAILED", error);
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
        $("#myModal").modal({show:true});
        contactForm.reset();
      },
      function (error) {
          alert("Opp's something has gone wrong Please try agian.")
        console.log("FAILED", error);
      }
    );
  return false; // To block from loading a new page
};

function sendBookingEnquiry(bookingForm){
    emailjs.
    send("g-adventures2020", "booking-enquiry",{
        "destination": bookingForm.destinationBf.value,
        "package": bookingForm.packageBf.value,
        "first_name": bookingForm.firstnameBf.value,
        "surname": bookingForm.surnameBf.value,
        "from_email": bookingForm.emailaddressBf.value,
        "contact_no": bookingForm.phoneBf.value,
        "address_line_one":bookingForm.inputaddressOneBf.value,
        "address_line_two":bookingForm.inputaddressTwoBf.value,
        "city": bookingForm.inputcityBf.value,
        "province":bookingForm.inputprovinceBf.value,
        "eircode" :bookingForm.inputeircodeBf.value,
        "no_of_adults":bookingForm.adultsBf.value,
        "no_of_children":bookingForm.childrenBf.value,
        "arrival_date": bookingForm.arrivalBf.value,
        "departure_date":bookingForm.departBf.value,
        "requests":bookingForm.requestsBf.value,
  }).then(
      function(response){
           console.log("SUCCESS", response);
        $("#booking-modal").modal({show:true});
        bookingForm.reset();
      },
      function (error) {
          alert("Opp's something has gone wrong Please try agian.")
        console.log("FAILED", error);
      });
        return false; // To block from loading a new page
};