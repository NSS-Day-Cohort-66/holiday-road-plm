import { renderAttractions } from "./attractions/AttractionProvider.js";

export const renderHTML = async () => {
  const attractionsHTML = await renderAttractions();

  return `
    <header class="header">
        <img src="" class=""/>
        <h1 class="title">Holiday Itinerary</h1>
    </header>

    <article class="choices">
    ${attractionsHTML}
    </article>

    <section>
     <article class="Weather">Weather</article>
     <article class="preview">Preview</article>
     <article class="savedItinerary">Saved Itinerary</article>
    </section>
    `;
};
