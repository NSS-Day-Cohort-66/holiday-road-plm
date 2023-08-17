import { renderParks } from "../parks/ParkProvider.js"

const parks = renderParks()

// const handleWeather =  (changeEvent) => {
//     if(changeEvent.target.id === "parks_dropdown") {
//         let latitude =  changeEvent.target.latitude
//         let longitude =  changeEvent.target.longitude
//         if(latitude && longitude) {
//             console.log(latitude)
//         }
//         return {latitude, longitude}
//        }
// return null
// }

const handleWeather = (changeEvent) => {
    if (changeEvent.target.id === "parks_dropdown") {
        const selectedOption = changeEvent.target.options[changeEvent.target.selectedIndex];
        const latitude = selectedOption.dataset.latitude;
        const longitude = selectedOption.dataset.longitude;
        console.log(changeEvent.target.options)
        console.log(latitude,longitude)
    } 
}




export const renderWeather = async () => {
    // const apiKey = "d8aa50947e1221a3030151e38237da3d";
    // const url = `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    // const response = await fetch(url);
    // const data = await response.json();

    document.addEventListener("click", handleWeather) 
  

    //   return weatherData;

  };
  