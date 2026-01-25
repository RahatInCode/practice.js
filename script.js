function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  const timeString = `${hours.toString().padStart(2, "0")}:${minutes}:${seconds}`;

  const dateString = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  document.getElementById("time").textContent = timeString;
  document.getElementById("ampm").textContent = ampm;
  document.getElementById("date").textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();
