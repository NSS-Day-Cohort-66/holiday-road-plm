import { setEateryChoice } from "../TransientState.js"
import { buttonChange } from "../SaveButton.js"

export const renderEateries = async() => {
    const response = await fetch("http://holidayroad.nss.team/eateries")
    const eateries = await response.json()


    let html = `<h2>Eateries</h2>
                <select class="dropdown" id="eateries_dropdown">
                <option value="0">Yum Yum</option>`

    const divStringArray = eateries.map((eat) => {
        return `
        <option value=${eat.id}> ${eat.businessName}`
    })
    html += divStringArray.join("")
    html += `</select>`
    return html
}


const handleEateryChoice = (choice) => {
  if (choice.target.id === "eateries_dropdown") {
    const selectedOption = choice.target.options[choice.target.selectedIndex];
    const selectedEateryName = selectedOption.textContent;
    setEateryChoice(parseInt(selectedOption.value));
    displaySelectedEateryName(selectedEateryName);
    buttonChange()
  }
};


export const displaySelectedEateryName = (selectedEateryName) => {
  const itineraryPreviewElement = document.getElementById("eateries_preview_html");
    const eateryHTML = `${selectedEateryName}`
   if (itineraryPreviewElement) {
    itineraryPreviewElement.textContent = eateryHTML;
  }
};


document.addEventListener("change", handleEateryChoice);


