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
  const saveButtonHTML = await SaveButton();
  const parkSelectionHTML = displaySelectedParkName()
  const attractionSelectionHTML = displaySelectedAttractionName()
  const eaterySelectionHTML = displaySelectedEateryName()
  const itinerariesHTML = ItineraryList()

  return `
    <header class="header">
       <div><img class="logo" src="images/national-park-logo-adventure.png" alt="logo"></div>
       <div class="title_logo_container"><img class="title_logo" src="images/Free_Sample_By_Wix.png" alt="logo"></div>
      <h3 class="tagline">"Roam, Capture, Connect: Your National Parks Companion"</h3>
    </header>
    
    <article class="main_container">
            <section class="left_container">
                <div class="parks_html">${parksHTML}</div>
                <div class="weather_html"></div>
            </section>
            <section class="middle_container">
                <div class="attractions_html">${attractionsHTML}</div>
                <div class="itinerary_preview">Itinerary Preview</div>
                <article class="details_button_html">
                <div id="park_preview_html"></div>
                <div class="park_details"></div>
                <div id="attractions_preview_html"></div>
                <div class="attraction_details"></div>
                <div id="eateries_preview_html"></div>
                <div class="eateries_details"></div>
                <div class="save_button_html">${saveButtonHTML}</div>
                <div id="error"></div>
            </section>
            <section class="right_container">
                <div class="eateries_html">${eateriesHTML}</div>
                <div id="saved_itinerary_html">Saved Itinerary</div>
            </section>
    </article>
    `;
};

