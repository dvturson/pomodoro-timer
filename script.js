console.log("Pomodoro!");

const startButton = document.getElementById("startPauseBtn");
const resetButton = document.getElementById("resetBtn");

let intervalId = null;
let mode = "default";
let studyTimeSelect = document.getElementById("study_options");
let sBreakTimeSelect = document.getElementById("sBreak_options");
let lBreakTimeSelect = document.getElementById("lBreak_options");
let sBreakCount = 0;
let initialDuration = parseInt(studyTimeSelect.value) * 60;
let timeLeft = initialDuration;
reset();

function countDown() {
    console.log(mode);
    if (timeLeft > 0) {
        timeLeft --;
        document.getElementById("timer").innerHTML = formatTime();
        document.getElementById("title").innerHTML = formatTime();
        // console.log(timeLeft);
    } else {
        document.getElementById("alarmSound").play();
        if (mode === "study") {
            mode = "break";
            updateStatus();
            if (sBreakCount < 3) {
                sBreakCount ++;
                timeLeft = parseInt(sBreakTimeSelect.value) * 60;
            }
            if (sBreakCount == 3) {
                sBreakCount = 0;
                timeLeft = parseInt(lBreakTimeSelect.value) * 60;
            }
            
        } else {
            mode = "study";
            updateStatus();
            timeLeft = parseInt(studyTimeSelect.value) * 60;
        }
    }
}

function reset() {
    mode = "default";
    sBreakCount = 0;
    startButton.innerHTML = "start";
    initialDuration = parseInt(studyTimeSelect.value) * 60;
    timeLeft = initialDuration;
    document.getElementById("timer").innerHTML = formatTime();
    document.getElementById("title").innerHTML = "Pomodoro Timer";
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    updateStatus();
    console.log("reset");
}

function pause() {
    clearInterval(intervalId)
    intervalId = null;
}

function updateStatus() {
    if (mode === "study") {
        document.getElementById("status").innerHTML = "study";
        document.body.style.backgroundColor = "rgba(187, 142, 142, 1)";
    } else if (mode === "break") {
        document.getElementById("status").innerHTML = "break";
        document.body.style.backgroundColor = "rgba(111, 144, 94, 1)";
    } else {
        document.getElementById("status").innerHTML = "Pomodoro";
        document.body.style.backgroundColor = "rgba(166, 151, 129, 1)";

    }
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
sBreakTimeSelect.addEventListener("change", () => {
    reset();
});
lBreakTimeSelect.addEventListener("change", () => {
    reset();
});


startButton.addEventListener("click", function() {
    if (intervalId === null) {
        intervalId = setInterval(countDown, 10);
        if (mode === "default") {
            mode = "study";
        }
        updateStatus();
        
        startButton.innerHTML = "pause";
    } else {
        startButton.innerHTML = "resume";
        pause();
    }
});

resetButton.addEventListener("click", function() {
    reset();
});