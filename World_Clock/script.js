// script.js

// Function to update time for all clocks
function updateClocks() {
  const clocks = document.querySelectorAll(".clock");

  clocks.forEach((clock) => {
    const timezone = clock.getAttribute("data-timezone");
    const timeElement = clock.querySelector(".time");

    const now = new Date();

    // Use Intl.DateTimeFormat to handle time zones
    const options = {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    const formatter = new Intl.DateTimeFormat([], options);
    const formattedTime = formatter.format(now);

    timeElement.textContent = formattedTime;
  });
}

// Add event listener for adding new clocks
document.getElementById("add-clock-button").addEventListener("click", () => {
  const select = document.getElementById("timezone-select");
  const timezone = select.value;
  const cityName = timezone.split("/")[1].replace("_", " "); // Simple extraction

  // Check if clock already exists
  const existingClock = document.querySelector(
    `.clock[data-timezone="${timezone}"]`
  );
  if (existingClock) {
    alert("Clock for this time zone already exists.");
    return;
  }

  // Create new clock element
  const clockDiv = document.createElement("div");
  clockDiv.classList.add("clock");
  clockDiv.setAttribute("data-timezone", timezone);

  const cityHeader = document.createElement("h2");
  cityHeader.textContent = cityName;

  const timePara = document.createElement("p");
  timePara.classList.add("time");
  timePara.textContent = "--:--:--";

  clockDiv.appendChild(cityHeader);
  clockDiv.appendChild(timePara);

  document.querySelector(".clocks-container").appendChild(clockDiv);

  // Update clocks to include the new clock immediately
  updateClocks();
});

// Initial call to display clocks immediately
updateClocks();

// Update clocks every second
setInterval(updateClocks, 1000);
