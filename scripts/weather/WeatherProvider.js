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
      const options = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getWeatherIconUrl = (iconCode) => {
      return `http://openweathermap.org/img/w/${iconCode}.png`;
  };

  let weatherHTML = '';
  const weatherContainer = document.querySelector(".weather_html");

  for (const dayIndex of [0, 7, 15, 23, 31, 39]) {
    const temperature = Math.round(weather.list[dayIndex].main.temp);
   
    let textColor = '';
    if (temperature >= 80) {
        textColor = 'red';
    } else if (temperature >= 60) {
        textColor = 'white';
    } else {
        textColor = 'blue';
    }
      weatherHTML += `
          <div class="weather_day_">
              <img class="weather_icon" src="${getWeatherIconUrl(weather.list[dayIndex].weather[0].icon)}" alt="Weather Icon">
              <div class="weather_date">${formatDate(weather.list[dayIndex].dt_txt)}<br></div>
              <div class="weather_forecast" style="color: ${textColor};">
              ${temperature}°F<br></div>
              <div class="weather_small">Feels like: ${Math.round(weather.list[dayIndex].main.feels_like)}°F<br>
              Chance of Rain: ${Math.round(weather.list[dayIndex].pop * 100)}%<br>
              Humidity: ${weather.list[dayIndex].main.humidity}%<br>
              Description: ${weather.list[dayIndex].weather[0].description}<br><br></div>
          </div>`;
  }

  weatherContainer.innerHTML = weatherHTML;
};

document.addEventListener("change", handleWeather);

// 80 and above is red
// 59-79 white 
// 0-60 blue 