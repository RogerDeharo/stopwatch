const startBtn = document.querySelector('.startBtn');
const mainStartBtn = document.querySelector('.mainStartBtn');


const lapResetBtn = document.querySelector('.lapResetBtn');
const mainLapBtn = document.querySelector('.mainLapBtn');


const laps = document.querySelector('.laps');


let milisec = 0;
let sec = 0;
let min = 0;

let m = 0;
let s = 0;
let ms = 0;

let time = document.querySelector('.time');
let int = null;

let isTimerStarted = false;

let allLaps = []; 
let lapsnumber = 1;

startBtn.addEventListener('click', () => {
    if(isTimerStarted === false) {
        int = setInterval(displayTimer, 10);
    }   else {
        clearInterval(int);
    }
    changeStartBtn();
    checkIsResetAvalable(); 
})

function displayTimer() {
    milisec++; 

    if(milisec >= 99) {
        sec++;
        milisec = 0; 
    }
    if(sec >= 60) {
        min++;
        sec = 0;
    }
    m = min < 10 ? "0" + min : min;
    s = sec < 10 ? "0" + sec : sec;
    ms = milisec < 10 ? "0" + milisec : milisec;


    time.innerHTML = `${m}:${s},${ms}`;
}

function changeStartBtn() {
    if(isTimerStarted === false){
        isTimerStarted = true;

        startBtn.innerHTML = "Stop";
        startBtn.classList.add("timerStarted")
        mainStartBtn.classList.add("timerStartedMain")
    } else{
        isTimerStarted = false;
        
        startBtn.innerHTML = "Start";
        startBtn.classList.remove("timerStarted")
        mainStartBtn.classList.remove("timerStartedMain")
    }
}

function checkIsResetAvalable() {
    if(isTimerStarted === false){
        lapResetBtn.innerHTML = "Reset";
    } else{
        lapResetBtn.innerHTML = "Lap"
    }
}

function displaylaps(){
    lapsnumber++;
    laps.innerHTML = ""
    if(allLaps.length > 0){
        allLaps.map(item => {
            laps.innerHTML +=
            `<div class="laps">
                <span>Lap ${item.number}| ${item.time}</span>
                </div>
                `
        })
    }
}

lapResetBtn.addEventListener('click', () => {
    if(isTimerStarted === false) {  //Resetar com o click
        clearInterval(int);
        m = 0;
        s = 0;
        ms = 0;

        milisec = 0;
        sec = 0;
        min = 0;
        time.innerHTML = "00:00;00";

    } else{ //Click de volta
        allLaps.push(
            {
                time: m + ":" + s + "," + ms,
                number: lapsnumber,
            }
        )
        displaylaps();
        console.log(allLaps);
    }
})
