//conteur
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const replayBtn = document.getElementById("ReplayBtn");

const contLabel = document.getElementById("contLabel");
const SLabel = document.getElementById("SLabel");
const time = document.getElementById("time");

let count = 0;
let start = 0;
let timecont = 0;
var disa = false;
var won;
let sec;

increaseBtn.onclick = function () {
    if (isRunning) {
        count++;
        contLabel.textContent = count;
        if(parseInt(contLabel.textContent) === parseInt(SLabel.textContent)){
            won=true;
            text();
            disa = true;
            check();
            myButton.disabled = false;
            clearInterval(timer);
            isRunning = false;
        }
    }
};

decreaseBtn.onclick = function () {
    if (isRunning) {
        count--;
        contLabel.textContent = count;
        if(parseInt(contLabel.textContent) === parseInt(SLabel.textContent)){
            won=true;
            text();
            disa = true;
            check();
            myButton.disabled = false;
            clearInterval(timer);
            isRunning = false;
        }
    }
};

resetBtn.onclick = function () {
    if (isRunning) {
        count = 0;
        contLabel.textContent = count;
    }
    document.getElementById("win").textContent="LET'S PLAY";
};

replayBtn.onclick = function () {
    count = 0;
    contLabel.textContent = count;
    start = 0;
    SLabel.textContent = start;
    timecont = 0;
    time.textContent = timecont;
    clearInterval(timer);
    isRunning = false;
    document.getElementById("PauseBtn").innerText = "Pause";
    document.getElementById("startBtn").disabled = false;
    disa = false;
    check();

    document.getElementById("win").textContent="LET'S PLAY";
};

//nb_aleatoire 
const myButton = document.getElementById("startBtn");
const myLabel = document.getElementById("SLabel");
const min = -80;
const max = 80;
let randNum;

myButton.onclick = function () {
    randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    myLabel.textContent = randNum;
    count = 0;
    contLabel.textContent = count;
    document.getElementById("win").textContent="LET'S PLAY";
    disa = false;
    check();

    clearInterval(timer);
    const SLabelValue = parseInt(SLabel.textContent, 10);
    if (SLabelValue >= -20 && SLabelValue <= 20) {
        sec = 4;
    } else if ((SLabelValue > -50 && SLabelValue <= -20) || (SLabelValue > 20 && SLabelValue <= 50)) {
        sec = 8;
    } else if ((SLabelValue > -80 && SLabelValue <= -50) || (SLabelValue > 50 && SLabelValue <= 80)) {
        sec = 13;
    }
    startTimer();

    document.getElementById("PauseBtn").innerText = "Pause";
    myButton.disabled = false;
};

//timer
var timer;
var isRunning = false;
var ele = document.getElementById('time');

function startTimer() {
    clearInterval(timer);
    ele.innerText = sec;
    timer = setInterval(() => {
        ele.innerText = --sec;
        if (sec <= 0) {
            clearInterval(timer);
            isRunning = false;
            disa = true;
            check();
            myButton.disabled = false;
            won=false;
            text();
        }
    }, 1000);
    isRunning = true;
}

function pauseResume() {
    const playButton = document.getElementById("startBtn");
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("PauseBtn").innerText = "Resume";
        disa = true;
        check();
    } else {
        startTimer();
        document.getElementById("PauseBtn").innerText = "Pause";
        disa = false;
        check();
    }
}


function check(){
    if(disa==true){
        myButton.disabled = true;
        increaseBtn.disabled = true;
        decreaseBtn.disabled = true;
        resetBtn.disabled = true;
    }else{
        myButton.disabled = false;
        increaseBtn.disabled = false;
        decreaseBtn.disabled = false;
        resetBtn.disabled = false;
    }
}

function text(){
    if(won){
        document.getElementById("win").textContent=document.getElementById("win").textContent=`YOU WON ${document.getElementById("I1").value}`;;
    }else if(!won){
        document.getElementById("win").textContent=    document.getElementById("win").textContent=`YOU LOST ${document.getElementById("I1").value}`;;
    }else{
        document.getElementById("win").textContent="LET'S PLAY";
    }
}
