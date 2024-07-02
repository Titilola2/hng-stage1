window.onload = function() {
    function updateTime() {
        // Get current time in UTC and replace "GMT" with "UTC"
        let currentTimeUTC = new Date().toUTCString().replace("GMT", "UTC");
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;

        // Display current day of the week
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDay = days[new Date().getUTCDay()];
        document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
    }

    // Update time immediately on load
    updateTime();

    // Update time every second
    setInterval(updateTime, 1000);
};
