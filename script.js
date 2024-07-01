window.onload = function() {
    // Display current time in UTC
    const currentTimeUTC = new Date().toUTCString();
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;

    // Display current day of the week
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = days[new Date().getUTCDay()];
    document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
};
