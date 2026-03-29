console.log("clouds...");

const cloudCount = 20;
const clouds = [];

for (let i = 0; i < cloudCount; i++) {
    const div = document.createElement("div");
    div.classList.add("cloud");

    const left = Math.random() * (window.innerWidth / 1);
    const top = Math.random() * (window.innerHeight / 7);
    const speed = Math.random() * 0.2 + 0.2;
    const opacity = Math.random() * 0.1 + 0.1;

    div.style.left = left + "px";
    div.style.top = top + "px";
    div.style.opacity = opacity;

    document.getElementById("sky").appendChild(div);

    clouds.push({div, left, speed});
}

function move() {
    clouds.forEach(cloud => {
        cloud.left += cloud.speed;
        let contentLeft = document.getElementById("content")
            .getBoundingClientRect().left;
        let contentRight = document.getElementById("content")
            .getBoundingClientRect().right;

        if (cloud.left > window.innerWidth) {
            cloud.left = -100;
            ;
        }


        cloud.div.style.left = cloud.left + "px";
    })

    requestAnimationFrame(move)
}


requestAnimationFrame(move)

console.log(Math.random() * 0.9 + 0.1)