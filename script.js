console.log("Hello!");

function change() {
    count = parseInt(document.getElementById("timer").innerHTML);
    count += 1;
    document.getElementById("timer").innerHTML = count;
    console.log(count);
}

function updateCounter() {
    console.log("tick");
    change();
}


const startButton = document.getElementById("startBtn");
startButton.addEventListener("click", function() {
    setInterval(updateCounter, 1000);
});

