let data = document.querySelectorAll(".data");
let timeframeButtons = document.querySelectorAll(".time-frame");
let currentTimeFrame = "daily";
let timeTrackingData = [];

function display(timeframe) {
    data.forEach((el, index) => {
        const activity = timeTrackingData[index];
        const curr = activity.timeframes[timeframe].current;
        const prev = activity.timeframes[timeframe].previous;
        let previousPeriod;

        if (timeframe === 'daily') previousPeriod = 'Yesterday';
        else if (timeframe === 'weekly') previousPeriod = 'Last Week';
        else if (timeframe === 'monthly') previousPeriod = 'Last Month';

        el.innerHTML = `
        <div class="current">${curr} hrs</div>
        <div class="previous">${previousPeriod} - ${prev} hrs</div>
        `;
    });
}

timeframeButtons.forEach((button) => {
    button.addEventListener('click', function () {
        timeframeButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
        console.log(this)
        currentTimeFrame = this.getAttribute("time-frame-data");
        display(currentTimeFrame);
    });
});

(async function () {
    try {
        const response = await fetch("data.json");
        if (!response.ok) {
            throw new Error("fetch error");
        }
        timeTrackingData = await response.json();

        timeframeButtons.forEach((btn) => btn.classList.remove("active"));
        document.querySelector(`[time-frame-data=${currentTimeFrame}]`).classList.add("active");
        display(currentTimeFrame);
    } catch (error) {
        console.log("error:", error);
    }
})();
