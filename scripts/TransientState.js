export let transientState = {
    parkId: 0,
    eateryId: 0,
    attractionId: 0
}

export const setParkChoice = (chosenPark) => {
    transientState.parkId = chosenPark
    console.log(transientState)
}
export const setEateryChoice = (chosenEatery) => {
    transientState.eateryId = chosenEatery
    console.log(transientState)
}
export const setAttractionChoice = (chosenAttraction) => {
    transientState.attractionId = chosenAttraction
    console.log(transientState)
}

const resetTransient = () => {
    transientState = {
        parkId: 0,
        eateryId: 0,
        attractionId: 0
    }
}

const handleSaveClick = (click) => {
    if (click.target.id === "saveButton") {
        if (transientState.parkId &&
            transientState.eateryId &&
            transientState.attractionId) {
                saveItinerary()
            }
        else {
            const buttonError = document.querySelector("#error")
            let errorString = "Please complete your itinerary"
            buttonError.innerHTML = errorString.italics()
            }
    }
}

export const saveItinerary = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/itineraries", postOptions)
    resetTransient()

    const customEvent = new CustomEvent("itinerarySaved")
    document.dispatchEvent(customEvent)
}

document.addEventListener("click", handleSaveClick)


