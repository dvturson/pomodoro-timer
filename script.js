console.log("Pomodoro!");

let intervalId = null;
let mode = "default";
let studyTimeSelect = document.getElementById("study_options");
let breakTimeSelect = document.getElementById("break_options");
let initialDuration = parseInt(studyTimeSelect.value) * 60;
let timeLeft = initialDuration;
reset();

function countDown() {
    console.log(mode);
    if (timeLeft > 0) {
        timeLeft --;
        document.getElementById("timer").innerHTML = formatTime();
        console.log(timeLeft);
    } else {
        document.getElementById("alarmSound").play();
        if (mode === "study") {
            mode = "break";
            updateStatus();
            timeLeft = parseInt(breakTimeSelect.value) * 60;
        } else {
            mode = "study";
            updateStatus();
            timeLeft = parseInt(studyTimeSelect.value) * 60;
        }
    }
}

function reset() {
    mode = "default";
    initialDuration = parseInt(studyTimeSelect.value) * 60;
    timeLeft = initialDuration;
    document.getElementById("timer").innerHTML = formatTime();
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    updateStatus();
    console.log("reset")
}

function pause() {
    clearInterval(intervalId)
    intervalId = null;
}

function updateStatus() {
    if (mode === "study") {
        document.getElementById("status").innerHTML = "study";
        document.body.style.backgroundColor = "#6f905eff";
    } else if (mode === "break") {
        document.getElementById("status").innerHTML = "break";
        document.body.style.backgroundColor = "#bb8e8eff";
    } else {
        document.getElementById("status").innerHTML = "meow";
        document.body.style.backgroundColor = "#9d9d9dff";

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
breakTimeSelect.addEventListener("change", () => {
    reset();
});

const startButton = document.getElementById("startPauseBtn");
startButton.addEventListener("click", function() {
    if (intervalId === null) {
        intervalId = setInterval(countDown, 20);
        mode = "study";
        updateStatus();
        
        startButton.innerHTML = "pause";
    } else {
        startButton.innerHTML = "resume";
        pause();
    }
});

const resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", function() {
    startButton.innerHTML = "start";
    reset();
});