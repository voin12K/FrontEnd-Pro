//Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

const userkilometers = parseFloat(prompt("kilometers:"));
const userfeet = parseFloat(prompt("feet:"));

const userkilometersNew = userkilometers * 1000;
const userfeetNew = userfeet * 305;

if (userkilometersNew > userfeetNew) {
    console.log( userkilometers + "km > " + userfeet + "feet");
}

if (userkilometersNew < userfeetNew) {
    console.log( userkilometers + "km < " + userfeet + "feet");
}

if (userkilometersNew === userfeetNew) {
    console.log( userkilometers + "km = " + userfeet + "feet");
}
