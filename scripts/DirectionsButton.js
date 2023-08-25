


export const fetchMaps = async () => {
    const response = await fetch("https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=AIzaSyB9RrXq8pEEZml8YsFr5x3sisYAcTJgY1E")
    const maps = await response.json()


}