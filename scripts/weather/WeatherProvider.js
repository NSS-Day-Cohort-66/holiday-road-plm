








export const renderWeather = async () => {
    const apiKey = "d8aa50947e1221a3030151e38237da3d";
    const lat = "";
    const long = "";
    const url = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    document.addEventListener("click", )
  
      const weatherData = {
        // temperature: data.main.temperature,
        condition: data.weather[0].main,
        location: data.name,
      };
  
      return weatherData;

  };
  