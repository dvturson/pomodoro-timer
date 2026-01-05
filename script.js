console.log("Pomodoro!");

let intervalId = null;
let time_options = document.getElementById("time_options");
let time_selection = parseInt(time_options.value);
let count = time_selection;
document.getElementById("timer").innerHTML = time_selection;

function countDown() {
    if (count > 0) {
        count --;
        document.getElementById("timer").innerHTML = count;
        console.log(count);
    }
}

function reset() {
    time_selection = parseInt(time_options.value);
    count = time_selection;
     document.getElementById("timer").innerHTML = count;
    if (intervalId != null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    console.log("reset")
}

time_options.addEventListener("change", () => {
    reset();
});

const startButton = document.getElementById("startBtn");
startButton.addEventListener("click", function() {
    if (intervalId === null) {
        intervalId = setInterval(countDown, 1000);
    }  
});

const resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", function() {
    reset();
});

