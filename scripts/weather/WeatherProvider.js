const handleWeather = (changeEvent) => {
  let coordinates = [];
  if (
    changeEvent.target.id === "parks_dropdown" &&
    changeEvent.target.value != 0
  ) {
    const latitude =
      changeEvent.target[parseInt(changeEvent.target.value)].dataset.latitude;
    const longitude =
      changeEvent.target[parseInt(changeEvent.target.value)].dataset.longitude;
    console.log(latitude);
    console.log(longitude);
    coordinates = [latitude, longitude];
  }
  console.log(coordinates);
  return coordinates;
};

export const renderWeather = async () => {
  //   const apiKey = "d8aa50947e1221a3030151e38237da3d";
  document.addEventListener("change", handleWeather);
  //   const url = `api.openweathermap.org/data/2.5/forecast?lat=${array[0]}&lon=${array[1]}&appid=${apiKey}`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   return data;
};
