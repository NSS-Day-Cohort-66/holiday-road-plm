
const handleWeather = async (changeEvent) => {
  if (changeEvent.target.id === "parks_dropdown" &&
      changeEvent.target.value !== 0) {
        const latitude = changeEvent.target[parseInt(changeEvent.target.value)].dataset.latitude;
        const longitude = changeEvent.target[parseInt(changeEvent.target.value)].dataset.longitude;
        await renderWeather(latitude, longitude)
        };
      }

export const renderWeather = async (latitude, longitude) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=729652beba72cb8ebe2d345b36b55b68`);
    const weather = await response.json();
    // let temp = weather.list.main.temp
    // const weatherHTML = `Local Forecast: ${weather.list.main.temp} degrees`
    return weather
};

document.addEventListener("change", handleWeather)

// const apiKey = "d8aa50947e1221a3030151e38237da3d";
//     const url = `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;