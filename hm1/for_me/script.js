const Fire = document.getElementById("fire");
const counterValueElement = document.getElementById("rockets");
const codRoc = document.getElementById("cod");


let counter = 0;

function rocketLaunch() {
    if (codRoc.value == 1488) {
        counter++;
        counterValueElement.textContent = "Количиство запущеных ракет: " + counter;
    } else {
        alert("ПОШЕЛ НАХУЙ, ШПИОН");
    }
}

Fire.addEventListener("click", rocketLaunch);



const killsCountElement = document.getElementById("killsCount");
const DestroyedHouses = document.getElementById("houseCount");
const destroyedHos = document.getElementById("hosCount");
const katzOp = document.getElementById("katzCount");
const dua = document.getElementById("duaCount");

let kills = 0;
let destroyedHouse = 0;
let destroyedHoss = 0;
let katzOps = 0;
let duas = 0;


function lastRocket() {
    let randomKills = getRandomNumber(0, 500);
    kills = randomKills;
    killsCountElement.textContent = kills;

    let randomHouse = getRandomNumber(0, 25);
    destroyedHouse = randomHouse;
    DestroyedHouses.textContent = destroyedHouse;

    let randomHos = getRandomNumber(0, 3);
    destroyedHoss = randomHos;
    destroyedHos.textContent = destroyedHoss;

    let randomOps = getRandomNumber(0, 10);
    katzOps = randomOps;
    katzOp.textContent = katzOps;

    let randomDua = getRandomNumber(0, 100);
    duas = randomDua;
    dua.textContent = duas;
}

Fire.addEventListener("click", lastRocket);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
