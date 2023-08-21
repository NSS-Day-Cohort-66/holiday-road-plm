import { setAttractionChoice } from "../TransientState.js";

export const renderAttractions = async () => {
  const response = await fetch("http://holidayroad.nss.team/bizarreries");
  const attractions = await response.json();

  let html = `<h2>Attractions</h2>
                <select id="attractions_dropdown">
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
    debugger
    setAttractionChoice(parseInt(selectedOption.value));
    displaySelectedAttractionName(selectedAttractionName);
  }
};


export const displaySelectedAttractionName = (selectedAttractionName) => {
  const itineraryPreviewElement = document.getElementById("attractions_preview_html");
  const attractionHTML = `${selectedAttractionName}`
  if (itineraryPreviewElement) {
    itineraryPreviewElement.textContent = attractionHTML;
  }
};

document.addEventListener("change", handleAttractionChoice);