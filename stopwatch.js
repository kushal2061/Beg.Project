

let millisecond=0, second = 0,minute = 0, hour=0, setId1=0,isRunning=false;

function start() {

    if (!isRunning){
        clearInterval(setId1);
        setId1 = setInterval(timeupdate, 10);
        isRunning=true;
        console.log(setId1);
}    
}

function timeupdate(){

        millisecond += 1;
        if (millisecond>=100){
            millisecond=0;
            second+=1;
        }
        if (second >= 60) {
            second = 0;
            minute += 1;
        }
        if (minute >= 60) {
            minute = 0;
            hour += 1;
        }
        
        document.getElementById("display").textContent = `${hour}:${minute}:${second}:${millisecond}`;       

}

function stop() {
    if(isRunning){
        clearInterval(setId1);
        isRunning=false;
  }   
}

function reset() {
    
    stop();
    document.getElementById("display").textContent = `00:00:00:00`;
    millisecond=0, second = 0 ,minute = 0, hour=0 ;  

}


