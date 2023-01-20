const timerButton = document.querySelector("button");
/** @type { HTMLSpanElement } */
const timerTime = document.querySelector("#timer-time");
const TIMER_KEY = "timer-time-key";

timerButton.addEventListener("click", () => {
    const timeNow = Date.now();
    const timeOut = timeNow + 10 * 1000;
    localStorage.setItem(TIMER_KEY, timeNow.toString());
    updateTimerValue();
})

document.addEventListener("visibilitychange", (ev) => {
    updateTimerValue();
});

window.addEventListener("load", () => {
    updateTimerValue();
})

function checkTimer() {
    updateTimerValue();
}

function updateTimerValue() {
    timerTime.innerText = localStorage.getItem(TIMER_KEY);
}
