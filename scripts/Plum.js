
import { renderAttractions } from "./attractions/AttractionProvider.js";
import { renderEateries } from "./eateries/EateryProvider.js";

export const renderHTML = async () => {
  const attractionsHTML = await renderAttractions();
  const eateriesHTML = await renderEateries()

  return `
    <header class="header">
        <img src="" class=""/>
        <h1 class="title">Holiday Itinerary</h1>
    </header>
    
    <article class="choices">
    ${attractionsHTML}
    <div class="eateries_html">
    ${eateriesHTML}
    </div>
    </article>

    <section>
     <article class="Weather">Weather</article>
     <article class="preview">Preview</article>
     <article class="savedItinerary">Saved Itinerary</article>
    </section>
    `;
};
