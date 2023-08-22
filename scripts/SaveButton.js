export const SaveButton = () => {
  return `<button class="save_button" id="save_click">Save Itinerary</button>`
};

export const buttonChange = () => {
  const dropdowns = document.querySelectorAll("select")
  const saveButton = document.querySelector(".save_button")
  const checkDropdowns = () => {
    const selectedDropdowns = Array.from(dropdowns).filter(
      dropdown => {
        const selectedValue = dropdown.options[dropdown.selectedIndex].value
        return selectedValue !== "0"
      })
    saveButton.classList.toggle("button-active", selectedDropdowns.length === 3)
  }
  dropdowns.forEach(dropdown => {
  dropdown.addEventListener("change", checkDropdowns)
})
}