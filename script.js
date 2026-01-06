console.log("Pomodoro!");

let intervalId = null;
let isStudying = true;
let studyTimeSelect = document.getElementById("study_options");
let breakTimeSelect = document.getElementById("break_options");
let initialDuration = parseInt(studyTimeSelect.value) * 60;
let timeLeft = initialDuration;
reset();

function countDown() {
    console.log(isStudying);
    if (timeLeft > 0) {
        timeLeft --;
        document.getElementById("timer").innerHTML = formatTime();
        console.log(timeLeft);
    } else {
        if (isStudying) {
            isStudying = false;
            timeLeft = parseInt(breakTimeSelect.value) * 60;
        } else {
             isStudying = true;
            timeLeft = parseInt(studyTimeSelect.value) * 60;
        }
    }
}

function reset() {
    initialDuration = parseInt(studyTimeSelect.value) * 60;
    timeLeft = initialDuration;
     document.getElementById("timer").innerHTML = formatTime();
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    console.log("reset")
}

function formatTime() {
    let minutes = parseInt(timeLeft / 60);
    let seconds = timeLeft % 60;
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // console.log(minutes + ":" + seconds);
    return minutes + ":" + seconds;
}

studyTimeSelect.addEventListener("change", () => {
    reset();
});
breakTimeSelect.addEventListener("change", () => {
    reset();
});

const startButton = document.getElementById("startBtn");
startButton.addEventListener("click", function() {
    if (intervalId === null) {
        intervalId = setInterval(countDown, 5);
    }  
});

const resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", function() {
    reset();
});