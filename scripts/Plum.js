import { renderParks } from "./parks/ParkProvider.js";
import { renderAttractions } from "./attractions/AttractionProvider.js";
import { renderEateries } from "./eateries/EateryProvider.js";
import { SaveButton } from "./SaveButton.js";
import { renderWeather } from "./weather/WeatherProvider.js";
import {
  parksDetailsButton,
  attractionDetailsButton,
  entreeDetailsButton,
} from "./DetailsButton.js";

export const renderHTML = async () => {
  const parksHTML = await renderParks();
  const attractionsHTML = await renderAttractions();
  const eateriesHTML = await renderEateries();
  const saveButtonHTML = SaveButton();

  return `
    <header class="header">
      <img src="" class=""/>
      <h1 class="title">Holiday Itinerary</h1>
      <h3 class="tagline">"Roam, Capture, Connect: Your National Parks Companion"</h3>
    </header>
    
    <article class="all_dropdown_choices">
      <div class="parks_html">${parksHTML}</div>
      <div class="attractions_html">${attractionsHTML}</div>
      <div class="eateries_html">${eateriesHTML}</div>
    </article>



    <section class="previews_html">
      <div class="weather_html"></div>
        <section class="middle_column">

        <div class="itinerary_preview_html">Itinerary Preview</div>
        <div class="park_selection">Park Selection: </div>


        <article class="details_button_html">
          <div class="park_details"></div>
          <div class="attraction_details"></div>
          <div class="entree_details"></div>
        </article>
        <div class="save_button_html">${saveButtonHTML}</div>
         </section>
      <div class="saved_itinerary_html">Saved Itinerary</div>
     </section>
    `;
};
