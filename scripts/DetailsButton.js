const handleDetailsButtonRender = (event) => {
  if (event.target.id === "parks_dropdown") {
    parksDetailsButton();
  } else if (event.target.id === "attractions_dropdown") {
    attractionDetailsButton();
  } else if (event.target.id === "eateries_dropdown") {
    entreeDetailsButton();
  }
};

export const parksDetailsButton = () => {
  const detailContainer = document.querySelector(".park_details");
  const detailsHTML = `<button id="detailsButton" onclick="">Details</button>`;
  detailContainer.innerHTML = detailsHTML;
};

export const attractionDetailsButton = () => {
  const detailContainer = document.querySelector(".attraction_details");
  const detailsHTML = `<button id="detailsButton" onclick="">Details</button>`;
  detailContainer.innerHTML = detailsHTML;
};

export const entreeDetailsButton = () => {
  const detailContainer = document.querySelector(".entree_details");
  const detailsHTML = `<button id="detailsButton" onclick="">Details</button>`;
  detailContainer.innerHTML = detailsHTML;
};

document.addEventListener("change", handleDetailsButtonRender);
