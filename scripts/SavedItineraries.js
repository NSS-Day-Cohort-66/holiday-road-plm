
// const getCoordinates = async (locationName) => {
//     const response = await fetch(`https://graphhopper.com/api/1/geocode?q=${locationName}&locale=us&limit=1&debug=true&key=fa1d8e20-865b-472e-b493-bf33b888a3e7`)
//     const object = await response.json()
//     let coordinatesArray = []
//     let latitude = object.hits[0].point.lat
//     let longitude = object.hits[0].point.lng
//     coordinatesArray.push(latitude, longitude)
//     return coordinatesArray
// }

export const ItineraryList = async () => {
    const response = await fetch("http://localhost:8088/itineraries")
    const itineraries = await response.json()

    const response2 = await fetch("http://holidayroad.nss.team/eateries")
    const eateries = await response2.json()

    const response3 = await fetch("http://holidayroad.nss.team/bizarreries")
    const attractions = await response3.json()

    const response4 = await fetch("https://developer.nps.gov/api/v1/parks?limit=471&api_key=raQAwREdVS4V3isCCYzljmmPmg30rf9X3ZvfVZam")
    const parks = await response4.json()
    let tripsHTML = `<h2 class="saved_itineraries_header">Saved Itineraries</h2>`
    for (let itinerary of itineraries) {
        const parkName = `${parks.data[itinerary.parkId - 1].fullName}`
        const foodName = `${eateries[itinerary.eateryId - 1].businessName}`
        const attName = `${attractions[itinerary.attractionId - 1].name}`

        // const foodCoordinates = await fetch(`https://graphhopper.com/api/1/geocode?q=${foodName}&locale=en&limit=1&debug=true&key=f1825e3e-1400-4935-bd25-1906cb7f5c6a`)
        // const foodGeo = await foodCoordinates.json()
        // let foodLat = 0
        // let foodLong = 0
        // if (foodGeo.hits != "") {
        // foodLat += foodGeo.hits[0].point.lat
        // foodLong += foodGeo.hits[0].point.lng}
        // else {const errorContainer = document.getElementById("itinerary_error")
        //     errorContainer.innerText = "Coordinates not found"}

        // const attCoordinates = await fetch(`https://graphhopper.com/api/1/geocode?q=${attName}&locale=en&limit=1&debug=true&key=f1825e3e-1400-4935-bd25-1906cb7f5c6a`)
        // const attGeo = await attCoordinates.json()
        // let attLat = 0
        // let attLong = 0
        // if (attGeo.hits != "") {
        // attLat += attGeo.hits[0].point.lat
        // attLong += attGeo.hits[0].point.lng}
        // else {const errorContainer = document.getElementById("itinerary_error")
        // errorContainer.innerText = "Coordinates not found"}
        

        tripsHTML += `<ul class='saved_itineraries'>
                    <li>
                    Park: ${parkName}<br>
                    Food: ${foodName}<br>
                    Attraction: ${attName}<br><br>
                    <button id="directions"
                    data-parklat="${parks.data[itinerary.parkId - 1].latitude}" 
                    data-parklong="${parks.data[itinerary.parkId - 1].longitude}" 
                    data-attraction>Get Directions 📍</button>
                    </li>
                    </ul>`
    }
    const itineraryList = document.getElementById("saved_itinerary_html");
    itineraryList.innerHTML = tripsHTML;
    return tripsHTML
}

const handleDirectionClick = async (click) => {
    if (click.target.id === "directions") {
        const apiKey = "f1825e3e-1400-4935-bd25-1906cb7f5c6a"
        const nashvilleLat = 36.1627
        const nashvilleLong = -86.7816
        let directionsHTML = ""
        let parkLat = (click.target.dataset.parklat)
        let parkLong = (click.target.dataset.parklong)
        // let foodLat = (click.target.dataset.foodlat)
        // let foodLong = (click.target.dataset.foodlong)
        // let attLat = (click.target.dataset.attlat)
        // let attLong = (click.target.dataset.attlong)

        // const response6 = await fetch(`https://graphhopper.com/api/1/route?point=51.131,12.414&point=48.224,3.867&profile=car&locale=us&calc_points=true&key=f1825e3e-1400-4935-bd25-1906cb7f5c6a`)
        const response6 = await fetch(`https://graphhopper.com/api/1/route?point=${nashvilleLat},${nashvilleLong}&point=${parkLat},${parkLong}&profile=car&locale=en&calc_points=true&key=${apiKey}`)
        const directions = await response6.json()
        const instructionsArray = directions.paths[0].instructions
        directionsHTML = instructionsArray
        const directionsContainer = document.getElementById("directions_html")
        directionsContainer.innerHTML = directionsHTML
        }
    
    tripsHTML += tripsArray.join("")
    const itineraryList = document.getElementById("saved_itinerary_html");
    itineraryList.innerHTML = tripsHTML;
    
}


// add a button to saved itinerary labeled EVents 
// when the user clicks the button, query the NPS API to get the first two events
// then display the following data in a dialog box


export const eventsButton = () => {
    const eventsContainer = document.getElementById("event_button")
    const eventsHTML = `<button class="events_button" id="save_click">Events</button>`
    eventsContainer.innerHTML = eventsHTML
}

export const handleEventsButton = async (event) => {
    if(event.target.id === "park_saved") {
        const parkFullName = event.target.dataset.fullname
         await fetchEvents(parkFullName)
    }
}

 const fetchEvents = async (parkFullName) => {
    const response = await fetch("https://developer.nps.gov/api/v1/events?limit=1718&api_key=u4HNwSA9HBy4oJIhFrGTQG2Xo9xrlV7mVMfmthTd")
    const eventsResponse = await response.json()
    const eventsArray = eventsResponse.data
    const eventsContainer = document.getElementById("event_container")
    let eventHTML = '<div>No available events</div>'
    for (const object of eventsArray) {
        if(object.parkfullname == parkFullName) {
           eventHTML = `<div class="event">
            <h3>${object.title}</h3>
            <p>Date: ${object.datestart}</p>
            <p>Time: ${object.times[0].timestart} - ${object.times[0].timeend}</p>
            <p>Description: ${object.description}</p>
            <p>Fee Info: ${object.feeinfo}</p>
            </div>`
        }
    }
    eventsContainer.innerHTML = eventHTML
}

document.addEventListener("click", handleEventsButton)

document.addEventListener("click", handleDirectionClick)

// &point=${foodLat},${foodLong}&point=${attLat},${attLong}

// let geocodingRequest = https://graphhopper.com/api/1/geocode?q=yosemite+national+park&locale=us&debug=true&key=fa1d8e20-865b-472e-b493-bf33b888a3e7

// data-foodlat="${foodLat}"
// data-foodlong="${foodLong}" 
// data-attlat="${attLat}" 
// data-attlong="${attLong}" 


