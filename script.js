async function load() {
  // First, fetch events from the Google Apps Script API
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbx7GatmL_bnyS-g7ipK5dF_k9aUa0hGasF0Usue9oFxSbNsNmJ9uqu3gJuh56Ph1peOmA/exec"
  );

  const events = await response.json();

  const eventsContainer = document.getElementById("events-container");
  eventsContainer.innerHTML = "";

  // Loop through events and place them on page
  for (let event of events) {
    eventsContainer.innerHTML += `
        <div class="card w-72 bg-base-100 shadow-xl">
          <figure><img src="${event.Image}" alt="${event.Name}" /></figure>
          <div class="card-body">
            <h2 class="card-title">${event.Name}</h2>
            <p>${event.Location}<br/>@ ${event.Date}</p>
            <div class="card-actions justify-end">
              <a class="btn btn-primary" href="${event.Link}" target="_blank">RSVP</a>
            </div>
          </div>
        </div>
      `;
  }
}

load();
