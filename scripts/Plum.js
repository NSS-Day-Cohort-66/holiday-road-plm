import { renderParks } from "./parks/ParkProvider.js";
import { renderAttractions } from "./attractions/AttractionProvider.js";
import { renderEateries } from "./eateries/EateryProvider.js";
import { renderWeather } from "./weather/WeatherProvider.js";
import { detailsSideButton } from "./DetailsButton.js";
import { SaveButton } from "./SaveButton.js";


export const renderHTML = async () => {
  const parksHTML = await renderParks();
  const attractionsHTML = await renderAttractions();
  const eateriesHTML = await renderEateries()
  const detailsButtonHTML = detailsSideButton();
  const saveButtonHTML = SaveButton();


  return `
    <header class="header">
        <img src="" class=""/>
        <h1 class="title">Holiday Itinerary</h1>
    </header>
    
    <article class="all_dropdown_choices">
    <div class="parks_html">${parksHTML}</div>
    <div class="attractions_html">${attractionsHTML}</div>
    <div class="eateries_html">${eateriesHTML}</div>
    </article>


    <section class="container">
    <div class="weather_html"></div>
    <div class="middle_column">
      <div class="column_item itinerary_preview_html">Itinerary Preview</div>
      <div class="column_item details_button_html">${detailsButtonHTML}</div>
      <div class="column_item save_button_html">${saveButtonHTML}</div>
    </div>
    <div class="saved_itineraries">Saved Itineraries</div>
  </section>
    `;
};
