// // alert("welcome to sigma web dev course ")
// let count = 0;
// let trafficInterval = null;

// function createCar() {
//     const car = document.createElement("div");
//     car.classList.add("car");

//     document.getElementById("carContainer").appendChild(car);

//     // Increase count when car finishes animation
//     car.addEventListener("animationend", () => {
//         count++;
//         document.getElementById("count").innerText = count;
//         car.remove();
//     });
// }

// function startTraffic() {
//     if (trafficInterval === null) {
//         trafficInterval = setInterval(createCar, 2000);
//     }
// }

// function stopTraffic() {
//     clearInterval(trafficInterval);
//     trafficInterval = null;
// }

// function resetCounter() {
//     count = 0;
//     document.getElementById("count").innerText = count;
//     document.getElementById("carContainer").innerHTML = "";
//     stopTraffic();
// }
const myHeart = {
    beats: "faster",
    reason: "You",
    feelings: "genuine",
    intentions: "pure"
};

if (you.smile && you.areComfortable) {
    myHeart.beats = "happiest";
}

console.log(
    "I admire you for who you are, not just how you look."
);

function askFromHeart() {
    return "Would you like to be a special part of my life? 💖";
}

askFromHeart();
