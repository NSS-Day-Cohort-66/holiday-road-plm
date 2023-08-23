import { setAttractionChoice } from "../TransientState.js";
import { buttonChange } from "../SaveButton.js";

export const renderAttractions = async () => {
  const response = await fetch("http://holidayroad.nss.team/bizarreries");
  const attractions = await response.json();

  let html = `<h2>Attractions</h2>
                <select class="dropdown" id="attractions_dropdown">
                <option value="0">Woo hoo!</option>`;

  const divStringArray = attractions.map((attraction) => {
    return `
        <option value=${attraction.id}> ${attraction.name}`;
  });
  html += divStringArray.join("");
  html += `</select>`;
  return html;
};

const handleAttractionChoice = (choice) => {
  if (choice.target.id === "attractions_dropdown") {
    const selectedOption = choice.target.options[choice.target.selectedIndex];
    const selectedAttractionName = selectedOption.textContent;
    const selectedOptionId = selectedOption.value;
    setAttractionChoice(parseInt(selectedOption.value));
    displaySelectedAttractionName(selectedAttractionName, selectedOptionId);
    buttonChange();
  }
};

export const displaySelectedAttractionName = (
  selectedAttractionName,
  selectedOptionId
) => {
  const itineraryPreviewElement = document.getElementById(
    "attractions_preview_html"
  );
  const attractionHTML = `<div class="selected_attractions" data-value="${selectedOptionId}">${selectedAttractionName}<br>`;
  if (itineraryPreviewElement) {
    itineraryPreviewElement.innerHTML += attractionHTML;
  }
};

document.addEventListener("change", handleAttractionChoice);
