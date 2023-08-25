
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
    "https://developer.nps.gov/api/v1/parks?limit=471&api_key=raQAwREdVS4V3isCCYzljmmPmg30rf9X3ZvfVZam"
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
