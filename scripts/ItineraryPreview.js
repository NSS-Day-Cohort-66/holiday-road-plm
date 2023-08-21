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