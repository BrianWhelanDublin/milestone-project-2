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
}

function sendBookingEnquiry(bookingForm){
    emailjs.send("g-adventures2020", "booking-enquiry",{
        "destination": bookingForm.destination-bf.value,
        "package": bookingForm.package-bf.value,
        "first_name": bookingForm.firstname-bf.value,
        "surname": bookingForm.surname.value,
        "from_email": bookingForm.emailaddress-bf.value,
        "contact_no": bookingForm.phone-bf.value,
        "address_line_one":bookingForm.inputaddress1-bf.value,
        "address_line_two":bookingForm.inputaddress2-bf.value,
        "city": bookingForm.inputcity-bf.value,
        "province":bookingForm.inputeircode-bf.value,
        "eircode" :bookingForm.inputaddress2-bf.value,
        "no_of_adults":bookingForm.adults-bf.value,
        "no_of_children":bookingForm.children-bf.value,
        "arrival_date": bookingForm.arrival-bf.value,
        "departure_date":bookingForm.depart-bf.value,
        "requests":bookingForm.requests-bf.value,

    })
}