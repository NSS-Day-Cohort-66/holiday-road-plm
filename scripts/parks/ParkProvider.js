import { setParkChoice } from "../TransientState.js";
import { buttonChange } from "../SaveButton.js"

export const renderParks = async () => {
  const response = await fetch(
    "https://developer.nps.gov/api/v1/parks?limit=20&api_key=raQAwREdVS4V3isCCYzljmmPmg30rf9X3ZvfVZam"
  );
  const parks = await response.json();

  let parksHTML = `<h2>National Parks</h2>
                    <select class="dropdown" id="parks_dropdown">
                    <option value="0">Parks yay!</option>`;
  let parkIdCounter = 0;
  const parksArray = parks.data.map((park) => {
    parkIdCounter++;
    return `<option data-latitude="${park.latitude}" data-longitude="${park.longitude}" value="${parkIdCounter}">${park.fullName}</option>`;
  });
  parksHTML += parksArray.join("");
  parksHTML += `</select>`;
  return parksHTML;
};

const handleParkChoice = (choice) => {
  if (choice.target.id === "parks_dropdown") {
    const selectedOption = choice.target.options[choice.target.selectedIndex];
    const selectedParkName = selectedOption.textContent;
    setParkChoice(parseInt(choice.target.value));
    displaySelectedParkName(selectedParkName);
    buttonChange()
  }
};

export const displaySelectedParkName = (selectedParkName) => {
  const itineraryPreviewElement = document.getElementById("park_preview_html");
  const parkHTML = `${selectedParkName}`
  if (itineraryPreviewElement) {
    itineraryPreviewElement.textContent = parkHTML;
  }
};

document.addEventListener("change", handleParkChoice);

