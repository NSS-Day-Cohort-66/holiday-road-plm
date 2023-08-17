import { renderParks } from "./parks/ParkProvider.js";
import { renderAttractions } from "./attractions/AttractionProvider.js";
import { renderEateries } from "./eateries/EateryProvider.js";
import { detailsSideButton } from "./DetailsButton.js";
import { SaveButton } from "./SaveButton.js";

export const renderHTML = async () => {
  const parksHTML = await renderParks();
  const attractionsHTML = await renderAttractions();
  const eateriesHTML = await renderEateries();
  const detailsButtonHTML = detailsSideButton();
  const saveButtonHTML = SaveButton();

  return `
    <header class="header">
        <img src="" class=""/>
        <h1 class="title">Holiday Itinerary</h1>
    </header>
    
    <article class="choices">
    <section id="parks">${parksHTML}</section>
    ${attractionsHTML}
    <div class="eateries_html">
    ${eateriesHTML}
    </div>
    </article>

    </article>

     <article class="Weather">Weather</article>
     <div>
        <article class="preview">Itinerary Preview</article>
        ${detailsButtonHTML}
        ${saveButtonHTML}
     <article class="savedItinerary">Saved Itinerary</article>
    </section>
    `;
};
