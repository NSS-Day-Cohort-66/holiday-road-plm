import { renderEateries } from "./eateries/EateryProvider.js";



export const renderHTML = async () => {
    const eateriesHTML = await renderEateries()


  return `
    <header class="header">
        <img src="" class=""/>
        <h1 class="title">Holiday Itinerary</h1>
    </header>

    <article class="choices">
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
