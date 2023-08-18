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
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=729652beba72cb8ebe2d345b36b55b68&units=imperial`
  );
  const weather = await response.json();
  const weatherHTML = `Local Forecast: \n
                          Feels like: \n
                          Humidity: \n
                          Temperature: ${weather.list[0].main.temp}°F
                        `;
  let weatherContainer = document.querySelector(".weather_html");
  weatherContainer.innerHTML = weatherHTML;
};

document.addEventListener("change", handleWeather);
