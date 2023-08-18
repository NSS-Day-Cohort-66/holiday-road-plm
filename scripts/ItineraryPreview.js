const handleParkChoice = (choice) => {
    if (choice.target.id === "parks_dropdown") {
      const selectedOption = choice.target.options[choice.target.selectedIndex];
      const latitude = selectedOption.getAttribute("data-latitude");
      const longitude = selectedOption.getAttribute("data-longitude");
      const parkName = selectedOption.text;
      
      const selectedParkDetails = `
        <h4>${parkName}</h4>
        <p>Latitude: ${latitude}</p>
        <p>Longitude: ${longitude}</p>
      `;
      
      const selectedParkContainer = document.getElementById(".itinerary_preview_html");
      selectedParkContainer.innerHTML = selectedParkDetails;
    }
  };
  