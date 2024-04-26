let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let millisecond = 0;






const hoursDisplay = document.querySelector(`#hour`);
const minutesDisplay = document.querySelector(`#minute`);
const secondsDisplay = document.querySelector(`#second`);
const millisecondsDisplay = document.querySelector(`#milliseconds`);
const startbtn = document.querySelector(`startbtn`);
const stopbtn = document.querySelector(`stopbtn`);
const resetbtn = document.querySelector(`resetbtn`);


function startWatch(){

    timer = setInterval(getTimer , 10);

    // console.log(startWatch);
}



function stopWatch(){

    clearInterval(timer);

    // console.log(stopWatch);
}



function resetWatch(){


    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    millisecond = 0;
    showTime();
    // console.log(resetWatch);
}

function getTimer(){

    millisecond++;
    if(millisecond >= 100){
    millisecond >= 0;
    seconds++;

} if(seconds >= 60){
    seconds = 0
    minutes++;


}if(minutes >= 60){
    minutes = 0
    hours++;

}
   showTime(); 
}

function showTime(){

    hoursDisplay.textContent = getUpdate(hours);
    minutesDisplay.textContent = getUpdate(minutes);
    secondsDisplay.textContent = getUpdate(seconds);
    millisecondsDisplay.textContent = getUpdate(millisecond);
}
    

function getUpdate(time){ 

  return time < 10 ? `0` + time : time;
}

startbtn.addEventListener (`click` , startWatch);
stopbtn.addEventListener (`click` , stopWatch);
resetbtn.addEventListener (`click` , resetWatch);













































