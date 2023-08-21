import { renderHTML } from "./Plum.js";

const mainContainer = document.querySelector("#container");

const renderAllHTML = async () => {
  mainContainer.innerHTML = await renderHTML();
};

document.addEventListener("itinerarySaved", (event) => {
  console.log("Refreshing...")
  renderAllHTML()
})

renderAllHTML();

