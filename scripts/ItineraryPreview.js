<<<<<<< HEAD
const handleParkChoice = (choice) => {
    if (choice.target.id === "parks_dropdown") {
      const selectedOption = choice.target.options[choice.target.selectedIndex];
      const latitude = selectedOption.getAttribute("data-latitude");
      const longitude = selectedOption.getAttribute("data-longitude");
      const parkName = selectedOption.text;
      
      const selectedParkDetails = `
        <h4>${parkName}</h4>
        <p>Latitude: ${latitude}</p>
        <p>Longitude: ${longitude}</p>
      `;
      
      const selectedParkContainer = document.getElementById(".itinerary_preview_html");
      selectedParkContainer.innerHTML = selectedParkDetails;
    }
  };
  
=======
import { setParkChoice, transientState } from './TransientState.js'; 




export const parkSelection = () => {
    const selectedPark = transientState.parkId


    if (selectedPark) {
        const parkContainer = document.getElementById("park_selection")
        parkContainer.innerHTML = `
        <h2>${selectedPark}</h2>`
    }
    return selectedPark
}


const chosenPark = `<h2>${selectedPark}</h2>>`
if (chosenPark) {
    setParkChoice(chosenPark); 
}

parkSelection()
>>>>>>> main
