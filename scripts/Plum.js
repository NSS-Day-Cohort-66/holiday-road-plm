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
//   const weather = await renderWeather();

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


    <section class="previews_html">
     <div class="weather_html">${weather}</div>
        <div class="itinerary_preview_html">Itinerary Preview</div>
        <div class="details_button_html">${detailsButtonHTML}</div>
       <div class="save_button_html">${saveButtonHTML}</div> 
     <div class="saved_itinerary_html">Saved Itinerary</div>
     </section>

    `;
};
