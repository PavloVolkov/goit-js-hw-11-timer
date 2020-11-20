
   const daysEl = document.querySelector('[data-value="days"]');
   const hoursEl = document.querySelector('[data-value="hours"]');
   const minutesEl = document.querySelector('[data-value="mins"]');
   const secondsEl = document.querySelector('[data-value="secs"]');

const timer = {
start(){

const addedTime = getTargetDate();
let targetTime =Date.now() + addedTime;

let timeId = setInterval (()=>{

let nowTime = Date.now();
  
let deltaTime = targetTime-nowTime;

const timeComponents = getTimeComponents(deltaTime);

secondsEl.textContent = foo(timeComponents.secs);
minutesEl.textContent = foo(timeComponents.mins);
hoursEl.textContent = foo(timeComponents.hours);
daysEl.textContent = foo(timeComponents.days);
console.log(foo(timeComponents.secs));
   },1000)
   
 }

}
 timer.start();

function getTimeComponents (time) {
   const days = Math.floor(time / (1000 * 60 * 60 * 24));
   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
   const secs = Math.floor((time % (1000 * 60)) / 1000);
   return {days, hours, mins, secs}
}

function foo(num) {
   if (num>10) {
  num = num.toString()
   }
   if(num<10){
      num = "0" + num.toString() 
   }
   return num
};

function getTargetDate(params) {
   
   let days = prompt("enter count of days!")
   let hours = prompt("enter count of hours!")
   let minutes = prompt("enter count of minute!")
if (days === null || days ==="") {
   days = 0;
}
if (hours === null || hours ==="") {
   hours = 0;
}
if (minutes === null || minutes ==="") {
   minutes = 0;
}

const countDownNum = days * (1000 * 60 * 60 * 24) + hours * (1000*60*60) + minutes * (1000*60);

return countDownNum
}


