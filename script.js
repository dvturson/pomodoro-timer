console.log("Pomodoro!");

let intervalId = null;
let count = parseInt(document.getElementById("timer").innerHTML);

function change() {
    if (count > 0) {
        count --;
        document.getElementById("timer").innerHTML = count;
    }  else {
        reset();
    }
}

function reset() {
    if (intervalId != null) {
        clearInterval(intervalId);
        intervalId = null;
        count = 10;
        document.getElementById("timer").innerHTML = count;
        console.log("reset")
    }
}

function updateCounter() {
    console.log(count);
    change();
}

const startButton = document.getElementById("startBtn");
startButton.addEventListener("click", function() {
    if (intervalId === null) {
        intervalId = setInterval(updateCounter, 1000);
    }  
});

const resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", function() {
    reset();
});