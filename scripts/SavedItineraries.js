export const ItineraryList = async () => {
    const response = await fetch("http://localhost:8088/itineraries")
    const trips = await response.json()

    const response2 = await fetch("http://holidayroad.nss.team/eateries")
    const eateries = await response2.json()

    const response3 = await fetch("http://holidayroad.nss.team/bizarreries")
    const attractions = await response3.json()

    const response4 = await fetch("https://developer.nps.gov/api/v1/parks?limit=20&api_key=raQAwREdVS4V3isCCYzljmmPmg30rf9X3ZvfVZam")
    const parks = await response4.json()

    let tripsHTML = `<h2>Saved itineraries</h2>`
    let tripsArray = trips.map(
        (trip) => {

            return `<div class='saved_itineraries'>
                    Park: ${parks.data[trip.parkId - 1].fullName}<br>
                    Food: ${eateries[trip.eateryId - 1].businessName}<br>
                    Attraction: ${attractions[trip.attractionId - 1].name}
                    </div>`
        }
    )
    tripsHTML += tripsArray.join("")
    const itineraryList = document.getElementById("saved_itinerary_html");
    itineraryList.innerHTML = tripsHTML;
    
}