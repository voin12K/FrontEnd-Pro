const Fire = document.getElementById("fire");
const counterValueElement = document.getElementById("rockets");
const codRoc = document.getElementById("cod");
const rocketsHaveElContainer = document.getElementById("rocketsHave");

let rocketsHaveElCounter = 100;
let counter = 0;

function rocketLaunch() {
    if (codRoc.value == 1488) {
        rocketsHaveElCounter--;

        if (rocketsHaveElCounter >= 0) {
            counter++;
            counterValueElement.textContent = "Количество запущенных ракет: " + counter;
            rocketsHaveElContainer.textContent = rocketsHaveElCounter;
        } else {
            alert("Надо шекели на новые ракеты");
        }
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
const mannyEl = document.getElementById("manny_box");

let kills = 0;
let destroyedHouse = 0;
let destroyedHoss = 0;
let katzOps = 0;
let duas = 0;
let manny = 0;

function addManny(){
    let kilManny = kills * 10;
    let houManny = destroyedHos * 300;
    let hosManny = destroyedHos * 700;
    let katzManny = katzOps * 30;
    let duaManny = duas * 5;

    let totalManny = kilManny + houManny + hosManny + katzManny + duaManny;
    manny = totalManny;
    manny.textContent = mannyEl;
}

Fire.addEventListener("click", addManny);

function lastRocket() {
    if (codRoc.value == 1488)
    {
        let randomKills = getRandomNumber(0, 500);
        kills = randomKills;
        killsCountElement.textContent = kills;
        savedKills.push(kills);

        let randomHouse = getRandomNumber(0, 25);
        destroyedHouse = randomHouse;
        DestroyedHouses.textContent = destroyedHouse;
        savedHouse.push(destroyedHouse);

        let randomHos = getRandomNumber(0, 3);
        destroyedHoss = randomHos;
        destroyedHos.textContent = destroyedHoss;
        savedHos.push(destroyedHoss);

        let randomOps = getRandomNumber(0, 10);
        katzOps = randomOps;
        katzOp.textContent = katzOps;
        savedKatz.push(katzOps);

        let randomDua = getRandomNumber(0, 100);
        duas = randomDua;
        dua.textContent = duas;
        savedDua.push(duas);
        }
}

Fire.addEventListener("click", lastRocket);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const killGlCountEl = document.getElementById("killGlCount");
const houseGlCounEl = document.getElementById("houseGlCount");
const hosGlCountEl = document.getElementById("hosGlCount");
const katzGlCountEl = document.getElementById("katzGlCount");
const duaGlCountEl = document.getElementById("duaGlCount");

let GlKills = 0;
let savedKills = []

let GlHouse = 0;
let savedHouse = []

let GlHos = 0;
let savedHos = []

let GlKatz = 0;
let savedKatz = []

let GlDua = 0;
let savedDua = []

function GlRocet(){
    GlKills = savedKills.reduce((acc, val) => acc + val, 0);
    killGlCountEl.textContent = GlKills;

    GlHouse = savedHouse.reduce((acc, val) => acc + val, 0);
    houseGlCounEl.textContent = GlHouse;

    GlHos = savedHos.reduce((acc, val) => acc + val, 0);
    hosGlCountEl.textContent = GlHos;

    GlKatz = savedKatz.reduce((acc, val) => acc + val, 0);
    katzGlCountEl.textContent = GlKatz;

    GlDua = savedDua.reduce((acc, val) => acc + val, 0);
    duaGlCountEl.textContent = GlDua;
}

Fire.addEventListener("click", GlRocet);