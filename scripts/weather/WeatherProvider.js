const handleWeather = async (changeEvent) => {
  if (
    changeEvent.target.id === "parks_dropdown" &&
    changeEvent.target.value !== 0
  ) {
    const latitude =
      changeEvent.target[parseInt(changeEvent.target.value)].dataset.latitude;
    const longitude =
      changeEvent.target[parseInt(changeEvent.target.value)].dataset.longitude;
    await renderWeather(latitude, longitude);
  }
};

export const renderWeather = async (latitude, longitude) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=729652beba72cb8ebe2d345b36b55b68&units=imperial`);
    const weather = await response.json();
    const formatDate = (dateString) => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/w/${iconCode}.png`;
  }

    const weatherHTML = `<div class="weather_day_1">
                        Date : ${formatDate(weather.list[0].dt_txt)}<br>
                        Local Forecast: ${Math.round(weather.list[0].main.temp)}°F<br>
                        Feels like: ${Math.round(weather.list[0].main.feels_like)}°F<br>
                        Chance of Rain: ${Math.round(weather.list[0].pop * 100)}%<br>
                        Humidity: ${weather.list[0].main.humidity}%<br>
                        Description: ${weather.list[0].weather[0].description}<br><br>
                        <img src="${getWeatherIconUrl(weather.list[0].weather[0].icon)}" alt="Weather Icon">
                        </div>
                        <div class="weather_day_2">
                        Date : ${formatDate(weather.list[8].dt_txt)}<br>
                         Local Forecast: ${Math.round(weather.list[8].main.temp)}°F<br>
                         Feels like: ${Math.round(weather.list[8].main.feels_like)}°F<br>
                         Chance of Rain: ${Math.round(weather.list[8].pop * 100)}%<br>
                         Humidity: ${weather.list[8].main.humidity}%<br>
                         Description: ${weather.list[8].weather[0].description}<br><br>
                         <img src="${getWeatherIconUrl(weather.list[8].weather[0].icon)}" alt="Weather Icon">
                        </div>
                        <div class="weather_day_3">
                        Date : ${formatDate(weather.list[16].dt_txt)}<br>
                        Local Forecast: ${Math.round(weather.list[16].main.temp)}°F<br>
                        Feels like: ${Math.round(weather.list[16].main.feels_like)}°F<br>
                        Chance of Rain: ${Math.round(weather.list[16].pop * 100)}%<br>
                        Humidity: ${weather.list[16].main.humidity}%<br>
                        Description: ${weather.list[16].weather[0].description}<br><br>
                        <img src="${getWeatherIconUrl(weather.list[16].weather[0].icon)}" alt="Weather Icon">
                        </div>
                        <div class="weather_day_4">
                        Date : ${formatDate(weather.list[24].dt_txt)}<br>
                        Local Forecast: ${Math.round(weather.list[24].main.temp)}°F<br>
                        Feels like: ${Math.round(weather.list[24].main.feels_like)}°F<br>
                        Chance of Rain: ${Math.round(weather.list[24].pop * 100)}%<br>
                        Humidity: ${weather.list[24].main.humidity}%<br>
                        Description: ${weather.list[24].weather[0].description}<br><br>
                        <img src="${getWeatherIconUrl(weather.list[24].weather[0].icon)}" alt="Weather Icon">
                        </div>
                        <div class="weather_day_5">
                        Date : ${formatDate(weather.list[32].dt_txt)}<br>
                        Local Forecast: ${Math.round(weather.list[32].main.temp)}°F<br>
                        Feels like: ${Math.round(weather.list[32].main.feels_like)}°F<br>
                        Chance of Rain: ${Math.round(weather.list[32].pop * 100)}%<br>
                        Humidity: ${weather.list[32].main.humidity}%<br>
                        Description: ${weather.list[32].weather[0].description}<br><br>
                        <img src="${getWeatherIconUrl(weather.list[32].weather[0].icon)}" alt="Weather Icon">
                        </div>

                        `
    const weatherContainer = document.querySelector(".weather_html")
    weatherContainer.innerHTML = weatherHTML

};

document.addEventListener("change", handleWeather);
