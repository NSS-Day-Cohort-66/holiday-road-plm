export const ItineraryList = async () => {
    const response = await fetch("http://localhost:8088/itineraries")
    const trips = await response.json()

    const response2 = await fetch("http://holidayroad.nss.team/eateries")
    const eateries = await response2.json()

    const response3 = await fetch("http://holidayroad.nss.team/bizarreries")
    const attractions = await response3.json()

    const response4 = await fetch("https://developer.nps.gov/api/v1/parks?limit=20&api_key=raQAwREdVS4V3isCCYzljmmPmg30rf9X3ZvfVZam")
    const parks = await response4.json()

    let tripsHTML = `<h2 class="saved_itineraries_header">Saved Itineraries</h2>`
    let tripsArray = trips.map(
        (trip) => {

            return `<ul class='saved_itineraries'>
                    <li>
                    Park: ${parks.data[trip.parkId - 1].fullName}<br>
                    Food: ${eateries[trip.eateryId - 1].businessName}<br>
                    Attraction: ${attractions[trip.attractionId - 1].name}
                    </li>
                    </ul>`
        }
    )
    tripsHTML += tripsArray.join("")
    const itineraryList = document.getElementById("saved_itinerary_html");
    itineraryList.innerHTML = tripsHTML;
    
}


// add a button to saved itinerary labeled EVents 
// when the user clicks the button, query the NPS API to get the first two events
// then display the following data in a dialog box



export const eventsButton2 = () => {
    return `<button ="events_button" id="save_click">Events</button>`
}

// export const eventsButton = () => {
//     const eventsContainer = document.querySelector(".events_button")
//     const eventsHTML = `<button class="events_button" id="save_click">Events</button>`
//     eventsContainer.innerHTML = eventsHTML
// }

const handleEventsButton = async (event) => {
    if(event.target.id === "save_click") {
        await fetchEvents(event)
    }
}


// export const fetchEvents = async () => {
//     const apiKey = "u4HNwSA9HBy4oJIhFrGTQG2Xo9xrlV7mVMfmthTd"
//     const limit = 2
//     const apiURL = `https://developer.nps.gov/api/v1/events?limit=${limit}&parkCode=&api_key=${apiKey}`
    
//     const response = await fetch(apiURL)
//     const eventsResponse = await response.json()
//     const eventsArray = eventsResponse.data
//     const eventsContainer = document.querySelector(".event_container")
//     const eventHTML = eventsArray.map(event => {
//          `<div class="event">
//         <h3>${event.title}</h3>
//         <p>Date: ${event.dateStart}</p>
//         <p>Time: ${event.timeStart} - ${event.timeEnd}</p>
//         <p>Description: ${event.description}</p>
//         <p>Fee Info: ${event.feeInfo}</p>
//     </div>`.join('')
//     })
//     eventsContainer.innerHTML = eventHTML
// }

// document.addEventListener("click", handleEventsButton)



