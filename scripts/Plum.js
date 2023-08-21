import { renderParks } from "./parks/ParkProvider.js";
import { renderAttractions } from "./attractions/AttractionProvider.js";
import { renderEateries } from "./eateries/EateryProvider.js";
import { SaveButton } from "./SaveButton.js";
import { renderWeather } from "./weather/WeatherProvider.js";
import {
  parksDetailsButton,
  attractionDetailsButton,
  eateryDetailsButton,
} from "./DetailsButton.js";
import { displaySelectedParkName } from "./parks/ParkProvider.js";
import { displaySelectedAttractionName } from "./attractions/AttractionProvider.js";
import { displaySelectedEateryName } from "./eateries/EateryProvider.js";
import { ItineraryList } from "./SavedItineraries.js";


export const renderHTML = async () => {
  const parksHTML = await renderParks();
  const attractionsHTML = await renderAttractions();
  const eateriesHTML = await renderEateries();
  const saveButtonHTML = SaveButton();
  const parkSelectionHTML = displaySelectedParkName()
  const attractionSelectionHTML = displaySelectedAttractionName()
  const eaterySelectionHTML = displaySelectedEateryName()
  const itinerariesHTML = ItineraryList()

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
        <section class="itinerary_preview_html">Itinerary Preview
            <article class="details_button_html">
                <div id="park_preview_html"></div>
                <div class="park_details"></div>
                <div id="attractions_preview_html"></div>
                <div class="attraction_details"></div>
                <div id="eateries_preview_html"></div>
                <div class="eateries_details"></div>
            </article>
        </section>
        <div class="save_button_html">${saveButtonHTML}</div>
        <div id="error"></div>
      </section>
      
      <div id="saved_itinerary_html"></div>
    </section>
    `;
};

