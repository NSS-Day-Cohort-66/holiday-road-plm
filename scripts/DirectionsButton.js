export const getDirections = async () => {

    const response = await fetch("http://localhost:8088/itineraries")
    const trips = await response.json()

    const response2 = await fetch("http://holidayroad.nss.team/eateries")
    const eateries = await response2.json()

    const response3 = await fetch("http://holidayroad.nss.team/bizarreries")
    const attractions = await response3.json()

    const response4 = await fetch("https://developer.nps.gov/api/v1/parks?limit=471&api_key=raQAwREdVS4V3isCCYzljmmPmg30rf9X3ZvfVZam")
    const parks = await response4.json()

    const apiKey = "fa1d8e20-865b-472e-b493-bf33b888a3e7"
    const response5 = await fetch(`https://graphhopper.com/api/1/geocode?q=yosemite+national+park&locale=us&debug=true&key=${apiKey}`)
    const directions = response5.json()


    const directionsContainer = document.getElementById("directions")
    let directionsHTML = ""
    directionsContainer.innerHTML = directionsHTML
}