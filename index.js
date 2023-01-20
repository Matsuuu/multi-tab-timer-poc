const timerButton = document.querySelector("button");
/** @type { HTMLSpanElement } */
const timerTime = document.querySelector("#timer-time");
const TIMER_KEY = "timer-time-key";

timerButton.addEventListener("click", () => {
    const timeNow = Date.now();
    const timeOut = timeNow + 10 * 1000;
    localStorage.setItem(TIMER_KEY, timeOut.toString());
    updateTimerValue();
})

document.addEventListener("visibilitychange", (ev) => {
    const visibilityState = document.visibilityState;
    if (visibilityState === "visible") {
        checkTimer();
    }
});

window.addEventListener("load", () => {
    checkTimer();
})

function checkTimer() {
    updateTimerValue();
    const timeNow = Date.now();
    if (timeNow > getTimerValue()) {
        displayAlert();
    }
}

function displayAlert() {
    alert("Time's up. Logging out");
}

function getTimerValue() {
    return Number(localStorage.getItem(TIMER_KEY) || 0);
}

function updateTimerValue() {
    timerTime.innerText = localStorage.getItem(TIMER_KEY);
}
