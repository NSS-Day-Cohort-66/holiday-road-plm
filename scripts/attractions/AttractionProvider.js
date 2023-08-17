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
      setAttractionChoice(parseInt(choice.target.value))
  }
}

document.addEventListener("change", handleAttractionChoice)