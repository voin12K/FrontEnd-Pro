function Human(name, age) {
    this.name = name;
    this.age = age;
}

let vlad = new Human("Vlad", 17);
let nikita = new Human("Nikita", 18);
let dima = new Human("Dima", 28);

function Avto(brand, model, year, number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.number = number;
    this.owner = null;

    this.setOwner = function (person) {
        if (person.age < 18) {
            console.log(`Sorry, ${person.name} is not eligible to own a car.`);
        } else {
            this.owner = person;
            console.log(`${person.name} is now the owner of the ${this.brand} ${this.model}.`);
        }
    };

    this.getOwner = function () {
        return this.owner;
    };
}

let honda = new Avto("Honda", "Civic", 2000, 1234);
let bmw = new Avto("BMW", "X5", 2005, 1122);
let mercedes = new Avto("Mercedes", "E-Class", 2010, 4321);

console.log(vlad);
console.log(nikita);
console.log(dima);

honda.setOwner(vlad);
bmw.setOwner(nikita);
mercedes.setOwner(dima);

console.log(`${honda.brand} owner: ${honda.getOwner() ? honda.getOwner().name : 'No owner'}`);
console.log(`${bmw.brand} owner: ${bmw.getOwner() ? bmw.getOwner().name : 'No owner'}`);
console.log(`${mercedes.brand} owner: ${mercedes.getOwner() ? mercedes.getOwner().name : 'No owner'}`);
