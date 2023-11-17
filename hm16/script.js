class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Avto {
    constructor(brand, model, year, number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
        this.owner = null;
    }

    setOwner(person) {
        if (person instanceof Human) {
            if (person.age < 18) {
                console.log(`Sorry, ${person.name} is not eligible to own a car.`);
            } else {
                this.owner = person;
                console.log(`${person.name} is now the owner of the ${this.brand} ${this.model}.`);
            }
        } else {
            console.log(`Invalid owner. Please provide an instance of the Human class.`);
        }
    }

    getOwner() {
        return this.owner;
    }
}

let vlad = new Human("Vlad", 17);
let nikita = new Human("Nikita", 18);
let dima = new Human("Dima", 28);

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
