import { transientState } from './TransientState.js'; 




export const parkSelection = () => {
    const selectedPark = transientState.parkId
debugger
    if (selectedPark) {
        const parkContainer = document.getElementById("park_selection")
        parkContainer.innerHTML = `
        <h2>${selectedPark}</h2>`
    }
    return selectedPark
}

parkSelection()