// Declaring all variables

const daysEl=document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minsEl=document.getElementById("mins");
const secondsEl=document.getElementById("seconds");
// declaration of next year Date
const newYears = "1 jan 2022";
// starting the function
function countDown(){
  const newYearsDate= new Date(newYears);
  const currentDAte = new Date();
  const totalSeconds=(newYearsDate-currentDAte)/1000;
  const seconds = Math.floor(totalSeconds)%60;
  const minutes = Math.floor(totalSeconds/60)%60;
  const hours = Math.floor(totalSeconds/3600)%24;
  const days = Math.floor(totalSeconds/3600/24);
  
daysEl.innerText=days;
hoursEl.innerHTML=hours;
minsEl.innerHTML=minutes;
secondsEl.innerHTML=seconds;

}
// Calling of count down variable with interval set for 1second
setInterval(countDown,1000);