export const ItineraryList = async () => {
    const response = await fetch("http://localhost:8088/itineraries")
    const trips = await response.json()

    let tripsHTML = `<h2>Saved itineraries</h2>`
    let tripsArray = trips.map(
        (trip) => {
            return `<div class='saved_itineraries'>
                    Park: <br>
                    Food: <br>
                    Attraction: 
                    </div>`
        }
    )
    tripsHTML += tripsArray.join("")
    return tripsHTML
}