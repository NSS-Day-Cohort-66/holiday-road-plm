
const getCoordinates = async (locationName) => {
    const response = await fetch(`https://graphhopper.com/api/1/geocode?q=${locationName}&locale=us&limit=1&debug=true&key=fa1d8e20-865b-472e-b493-bf33b888a3e7`)
    const object = await response.json()
    let coordinatesArray = []
    let latitude = object.hits[0].point.lat
    let longitude = object.hits[0].point.lng
    coordinatesArray.push(latitude, longitude)
    return coordinatesArray
}

export const ItineraryList = async () => {
    const response = await fetch("http://localhost:8088/itineraries")
    const trips = await response.json()

    const response2 = await fetch("http://holidayroad.nss.team/eateries")
    const eateries = await response2.json()

    const response3 = await fetch("http://holidayroad.nss.team/bizarreries")
    const attractions = await response3.json()

    const response4 = await fetch("https://developer.nps.gov/api/v1/parks?limit=471&api_key=raQAwREdVS4V3isCCYzljmmPmg30rf9X3ZvfVZam")
    const parks = await response4.json()

    let tripsHTML = `<h2 class="saved_itineraries_header">Saved Itineraries</h2>`
    let tripsArray = trips.map(
        (trip) => {
            const parkName = `${parks.data[trip.parkId - 1].fullName}`
            const foodName = `${eateries[trip.eateryId - 1].businessName}`
            const attName = `${attractions[trip.attractionId - 1].name}`
            let foodCoordinates = []
            let attCoordinates = []
            foodCoordinates = getCoordinates(foodName)
            attCoordinates = getCoordinates(attName)

            return `<ul class='saved_itineraries'>
                    <li>
                    Park: ${parkName}<br>
                    Food: ${foodName}<br>
                    Attraction: ${attName}<br><br>
                    <button class="directions_button" 
                    data-park-lat="${parks.data[trip.parkId - 1].latitude}" 
                    data-park-long="${parks.data[trip.parkId - 1].longitude}" 
                    data-food-lat="${foodCoordinates[0]}"
                    data-food-long="${foodCoordinates[1]}" 
                    data-att-lat="${attCoordinates[0]}" 
                    data-att-long="${attCoordinates[1]}" 
                    data-attraction>Get Directions 📍</button>
                    </li>
                    </ul>`
        }
    )
    tripsHTML += tripsArray.join("")
    // const itineraryList = document.getElementById("saved_itinerary_html");
    // itineraryList.innerHTML = tripsHTML;
    return tripsHTML
}

const handleDirectionClick = async (click) => {
    if (click.target.id === "directions") {
        const apiKey = "fa1d8e20-865b-472e-b493-bf33b888a3e7"
        const response5 = await fetch(`https://graphhopper.com/api/1/geocode?q=yosemite+national+park&locale=us&debug=true&key=${apiKey}`)
        const directions = response5.json()


        const directionsContainer = document.getElementById("directions")
        let directionsHTML = ""
        directionsContainer.innerHTML = directionsHTML
        }
}

document.addEventListener("click", handleDirectionClick)

// let geocodingRequest = https://graphhopper.com/api/1/geocode?q=yosemite+national+park&locale=us&debug=true&key=fa1d8e20-865b-472e-b493-bf33b888a3e7