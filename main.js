const refDays = document.querySelector('[data-value="days"]');
const refHours = document.querySelector('[data-value="hours"]');
const refMins = document.querySelector('[data-value="mins"]');
const refSecs = document.querySelector('[data-value="secs"]');

class CountdownTimer {
  constructor(selector, holiday) {
    this.selector = selector;
    this.holiday = holiday;
  }
  start() {
    const holiday = new Date("Jul 24,2021").getTime();

    setInterval(() => {
      const currentDate = Date.now();
      const timerDate = holiday - currentDate;
      console.log(timerDate);
      const getDays = (time) => pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      console.log(getDays(timerDate));
      const getHours = (time) =>
        pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      console.log(getHours(timerDate));
      const getMins = (time) =>
        pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      console.log(getMins(timerDate));
      const getSecs = (time) => pad(Math.floor((time % (1000 * 60)) / 1000));
      console.log(getSecs(timerDate));
      refDays.textContent = getDays(timerDate);
      refHours.textContent = getHours(timerDate);
      refMins.textContent = getMins(timerDate);
      refSecs.textContent = getSecs(timerDate);
    }, 100);
  }
}

//ф-ция от Репеты возвращает 00 до 10
function pad(value) {
  return String(value).padStart(2, "0");
}

// function setTimer({ days, hours, mins, secs }) {

// }
const timer = new CountdownTimer({
  selector: "#timer-1",
  holiday: new Date("Jul 24, 2021"),
});
timer.start();
