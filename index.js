class CountdownTimer {
   constructor({selector, targetDate} = {}) {
    this.selector = selector;
    this.targetDate = targetDate;
   }
  
   get addedTime() {
      return this.targetDate;
    }
      start(){
         
         let timeId = setInterval (()=>{
        
            const daysEl = document.querySelector('[data-value="days"]');
            const hoursEl = document.querySelector('[data-value="hours"]');
            const minutesEl = document.querySelector('[data-value="mins"]');
            const secondsEl = document.querySelector('[data-value="secs"]');
         
            let nowTime = Date.now();
            
            let deltaTime = this.addedTime-nowTime;
            
            const timeComponents = getTimeComponents(deltaTime);

            secondsEl.textContent = foo(timeComponents.secs);
            minutesEl.textContent = foo(timeComponents.mins);
            hoursEl.textContent = foo(timeComponents.hours);
            daysEl.textContent = foo(timeComponents.days);
            },1000)

            function getTimeComponents (deltaTime) {
               const days = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
               const hours = Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
               const mins = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
               const secs = Math.floor((deltaTime % (1000 * 60)) / 1000);
               return {days, hours, mins, secs}
            }
            function foo(num) {
               if (num>10) {
               num = num.toString()
               }
               if(num<10 && num>=0){
                  num = "0" + num.toString() 
               }
               return num
               };
            }
      }
 
const timer = new CountdownTimer({
   selector: '#timer-1',
   targetDate: new Date('Jul 17, 2021'),
 });


 timer.start()
