import { renderParks } from "./parks/ParkProvider.js";

export const renderHTML = async () => {
    const parksHTML = renderParks()
  return `
    <header class="header">
        <img src="" class=""/>
        <h1 class="title">Holiday Itinerary</h1>
    </header>

    <article class="choices">
    <section id="parks">

    </article>
    <section>${parksHTML}</section>
     <article class="Weather">Weather</article>
     <article class="preview">Preview</article>
     <article class="savedItinerary">Saved Itinerary</article>
    </section>
    `;
};
