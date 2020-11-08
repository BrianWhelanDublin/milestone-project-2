/* Rest Countries api to get flag and country details for destination page
I've used the resume project tutorial code to use jQuery to get my api data */

// renders country flag
const renderFlag = (destination) =>{
    let flagArea = document.querySelector(".details-col");
    flagArea.innerHTML = `
        <img src="${destination.flag}" alt="${destination.name} flag" class="flag center">
    `
}




// renders list of country information onto page
const renderDestinationInfoList = (destination) => {
  let markup = `
      <li class="details-item">
         Country: ${destination.name}
	  </li>
      <li class="details-item">
         Capital: ${destination.capital}
	  </li>
      <li class="details-item">
         Region : ${destination.region}
	  </li>
      <li class="details-item">
         Currency: ${destination.currencies[0].name}
	  </li>
      <li class="details-item">
        Language : ${destination.languages[0].name}
	  </li>
    `;
    document.querySelector(".details-list").insertAdjacentHTML("beforeend", markup)
};

// Api call to rest countries api using jQuery
const getCountryData = (destination) => {
    let country = destination.country
  $.when($.getJSON(`https://restcountries.eu/rest/v2/name/${country}`)).then(
    (response) => {
      let countryData = response[0];
      renderDestinationInfoList(countryData);
      renderFlag(countryData)
      console.log(countryData);
    },
    (error) => {
      console.log(error);
      console.log("aghh");
    }
  );
};
