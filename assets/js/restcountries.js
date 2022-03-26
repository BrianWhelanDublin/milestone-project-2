/* Rest Countries api to get flag and country details for destination page
I've used the resume project tutorial code to use jQuery to get my api data */
//query selectors
let flagArea = document.querySelector(".details-flag-col");
let detailsList = document.querySelector(".details-list-col");

// renders country flag on the page
const renderFlag = (destination) => {
	flagArea.innerHTML = `
        <img src="${destination.flag}" alt="${destination.name} flag" class="flag center">`;
};

// renders message to site if theres an error finding the flag
const renderFlagError = () => {
	flagArea.innerHTML = `
      <p class="error"> Error No flag found </p>`;
};

// renders list of country information onto page
const renderDestinationInfoList = (destination) => {
	detailsList.innerHTML = `
  	<ul class="details-list center">
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
    </ul>
    `;
};

// renders message to site if theres an error finding the countries details
const renderDestinationInfoListError = () => {
	detailsList.innerHTML = `
      <p class="error"> Error No Country details found </p>`;
};

// Api call to rest countries api using jQuery
const getCountryData = (destination) => {
	let country = destination.country;
	$.when(
		$.getJSON(`https://restcountries.com/v2/name/${country}?fullText=true
  `)
	).then(
		(response) => {
			console.log(response);
			let countryData = response[0];
			renderDestinationInfoList(countryData);
			renderFlag(countryData);
		},
		(errorResponse) => {
			if (errorResponse.status === 404) {
				renderFlagError();
				renderDestinationInfoListError();
			} else {
				console.log(errorResponse);
				flagArea.innerHTML = `
          <p class ="error">${errorResponse.status}</p>
          `;
				detailsList.innerHTML = `
      <p class="error">${errorResponse.status}</p>`;
			}
		}
	);
};
