import { setEateryChoice } from "../TransientState.js"

export const renderEateries = async() => {
    const response = await fetch("http://holidayroad.nss.team/eateries")
    const eateries = await response.json()


    let html = `<h2>Eateries</h2>
                <select class="dropdown" id="eateries_dropdown">
                <option value="0">Yum Yum</option>`

    const divStringArray = eateries.map((eat) => {
        return `
        <option value=${eat.id}> ${eat.businessName}`
    })
    html += divStringArray.join("")
    html += `</select>`
    return html
}

const handleEateryChoice = (choice) => {
    if (choice.target.id === "eateries_dropdown") {
        setEateryChoice(parseInt(choice.target.value))
    }
  }
  
  document.addEventListener("change", handleEateryChoice)