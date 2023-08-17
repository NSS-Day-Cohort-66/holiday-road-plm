export const renderParks = async () => {
    const response = await fetch("https://developer.nps.gov/api/v1/parks?limit=20&api_key=raQAwREdVS4V3isCCYzljmmPmg30rf9X3ZvfVZam")
    const parks = await response.json()

    let parksHTML = `<h2>National Parks</h2>
                    <select id="parks_dropdown">
                    <option value="0">Parks yay!</option>`
    const parksArray = parks.data.map(
        (park) =>  {
            return `
            <option latitude="${park.latitude}"
            longitude="${park.longitude}"
            value="${park.parkCode}">${park.fullName}</option>`
        }
    )
    parksHTML += parksArray.join("")
    parksHTML += `</select>`
    return parksHTML
}