const refDays = document.querySelector('[data-value="days"]');
const refHours = document.querySelector('[data-value="hours"]');
const refMins = document.querySelector('[data-value="mins"]');
const refSecs = document.querySelector('[data-value="secs"]');
const refTimer = document.querySelector('.timer');
//console.log(refTimer);
 

class CountdownTimer {
  constructor(selector, holiday) {
    this.selector = selector;
    this.holiday = holiday;
  }

  start() {
    
    this.interval = setInterval(() => {
      //если время вышло
      //const holiday = new Date("Jun 18,2021").getTime();

      const holiday = new Date("Jul 18,2021").getTime();
      const currentDate = Date.now();
      const timerDate = holiday - currentDate;
      //console.log(timerDate);
      const {days,hours,mins,secs }=this.getTimeForTimer(timerDate);
      refDays.textContent =  days ;
      refHours.textContent = hours;
      refMins.textContent =  mins ;
      refSecs.textContent = secs;

      this.finishOfTimer(timerDate);

    }, 100);

  };

  getTimeForTimer(time) {
  const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  console.log(days);
  const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  //console.log(getHours(timerDate));
  const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  //console.log(getMins(timerDate));
  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  //console.log(getSecs(timerDate));
    return { days, hours, mins, secs };
}

//ф-ция от Репеты возвращает 00 до 10
pad(value) {
  return String(value).padStart(2, "0");
}
//чтобы таймер не уходил в минус
finishOfTimer(time) {
  if (time <= 0) {
    clearInterval(this.interval);
    refTimer.textContent = 'HAPPY HOLIDAYS'
  }
};
};

const timer = new CountdownTimer({
  selector: "#timer-1",
  holiday: new Date("Jul 18, 2021"),
});
timer.start();
// Если время вышло
// const timer = new CountdownTimer({
//   selector: "#timer-1",
//   holiday: new Date("Jun 18, 2021"),
// });
// timer.start();