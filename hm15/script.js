function Human(name, gender) {
    this.name = name;
    this.gender = gender;
}

function Apartment() {
    this.residents = [];
}

Apartment.prototype.addResident = function (resident) {
    this.residents.push(resident);
}

function House(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
}

House.prototype.addApartment = function (apartment) {
    if (this.apartments.length < this.maxApartments) {
        this.apartments.push(apartment);
    } else {
        console.log("Maximum number of apartments reached. Cannot add another apartment.");
    }
}

let person1 = new Human("John", "Male");
let person2 = new Human("Anna", "Female");
let person3 = new Human("Mike", "Male");

let apartment1 = new Apartment();
let apartment2 = new Apartment();

apartment1.addResident(person1);
apartment1.addResident(person2);
apartment2.addResident(person3);

let house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);

console.log(house);
