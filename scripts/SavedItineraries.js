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

            return `<ul class='saved_itineraries'>
                    <li>
                    <div id="park_saved" data-fullname="${parks.data[trip.parkId - 1].fullName}">Park: ${parks.data[trip.parkId - 1].fullName}<br></div>
                    <div>Food: ${eateries[trip.eateryId - 1].businessName}<br></div>
                    <div>Attraction: ${attractions[trip.attractionId - 1].name}</div>
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


