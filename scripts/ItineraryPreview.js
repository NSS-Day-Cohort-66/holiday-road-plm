import { renderParks } from "./parks/ParkProvider.js";



// export const parkSelection = () => {
//     const dropdown = document.querySelector("");
//     const selectionDisplay = document.querySelector(".park_selection");
//     debugger
//     if (dropdown) {

//         dropdown.addEventListener("change", (event) => {
//             const selectedOption = event.target.id;
//             selectionDisplay.textContent = `Selected Option: ${selectedOption}`;
//         })
//     }
//     return ""; 
// }




export const parkSelection = (event) => {
    const selectedPark = event.target.parkId
}