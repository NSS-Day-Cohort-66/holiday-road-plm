// just for the button HTML
// const handleDetailsButtonRender = (event) => {
//   if (event.target.id === "parks_dropdown") {
//     parksDetailsButton(
//       event.target[parseInt(event.target.value)].dataset.latitude
//     );
//   } else if (event.target.id === "attractions_dropdown") {
//     attractionDetailsButton(event.target[parseInt(event.target.value)].value);
//   } else if (event.target.id === "eateries_dropdown") {
//     eateryDetailsButton(event.target[parseInt(event.target.value)].value);
//   }
// };

// export const parksDetailsButton = (latitude) => {
//   const detailContainer = document.querySelector(".park_details");
//   const detailsHTML = `<button id="parkDetailsButton" data-latitude="${latitude}">Details</button>`;
//   detailContainer.innerHTML = detailsHTML;
// };

// export const attractionDetailsButton = (value) => {
//   const detailContainer = document.querySelector(".attraction_details");
//   const detailsHTML = `<button id="attractionDetailsButton" value="${value}">Details</button>`;
//   detailContainer.innerHTML = detailsHTML;
// };

// export const eateryDetailsButton = (value) => {
//   const detailContainer = document.querySelector(".eateries_details");
//   const detailsHTML = `<button id="eateryDetailsButton" value="${value}">Details</button>`;
//   detailContainer.innerHTML = detailsHTML;
// };

// here is where the info gets populated for the details
export const handleDetailsRender = (event) => {
  if (event.target.className === "selected_park") {
    parkDetailsFunction(event);
  } else if (event.target.className === "selected_attractions") {
    attractionDetailsFunction(event);
  } else if (event.target.className === "selected_eatery") {
    eateryDetailsFunction(event);
  }
};

const parkDetailsFunction = async (event) => {
  const response = await fetch(
    "https://developer.nps.gov/api/v1/parks?limit=20&api_key=raQAwREdVS4V3isCCYzljmmPmg30rf9X3ZvfVZam"
  );
  const parks = await response.json();
  const parksArray = parks.data;
  const detailsContainer = document.querySelector(".details");

  let html = "Error";
  for (const obj of parksArray) {
    if (obj.latitude == event.target.dataset.latitude) {
      html = `<div class="details_park">Name: ${obj.fullName} <br>
              State: ${obj.states} <br>
              Designation: ${obj.designation}<br>
              Description: ${obj.description}</div>`;
    }
  }
  detailsContainer.innerHTML = html;
};

const attractionDetailsFunction = async (event) => {
  const response = await fetch("http://holidayroad.nss.team/bizarreries");
  const bizzarreries = await response.json();
  const detailsContainer = document.querySelector(".details");

  let html = "Error";
  for (const obj of bizzarreries) {
    if (obj.id == event.target.dataset.value) {
      html = `<div class="details_attraction">Name: ${obj.name}<br>
              City, State: ${obj.city}, ${obj.state}<br>
              Description: ${obj.description}
              </div>`;
    }
  }
  detailsContainer.innerHTML = html;
};

const eateryDetailsFunction = async (event) => {
  const response = await fetch("http://holidayroad.nss.team/eateries");
  const eateries = await response.json();
  const detailsContainer = document.querySelector(".details");

  let html = "Error";
  for (const obj of eateries) {
    if (obj.id == event.target.dataset.value) {
      html = `<div class="details_eatery">Name: ${obj.businessName}<br>
              City, State: ${obj.city}, ${obj.state}<br>
              Description: ${obj.description}
              </div>`;
    }
  }
  detailsContainer.innerHTML = html;
};

document.addEventListener("click", handleDetailsRender);
