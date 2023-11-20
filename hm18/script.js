class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    static get SIZE_SMALL() {
        return 'small';
    }

    static get SIZE_LARGE() {
        return 'large';
    }

    static get STUFFING_CHEESE() {
        return 'cheese';
    }

    static get STUFFING_SALAD() {
        return 'salad';
    }

    static get STUFFING_POTATO() {
        return 'potato';
    }

    static get TOPPING_SPICE() {
        return 'spice';
    }

    static get TOPPING_MAYO() {
        return 'mayo';
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        const sizePrices = {
            small: 50,
            large: 100
        };

        const stuffingPrices = {
            cheese: 10,
            salad: 20,
            potato: 15
        };

        const toppingPrices = {
            spice: 15,
            mayo: 20
        };

        const basePrice = sizePrices[this.size] + stuffingPrices[this.stuffing];
        const toppingPrice = this.toppings.reduce((acc, topping) => acc + toppingPrices[topping], 0);

        return basePrice + toppingPrice;
    }

    calculateCalories() {
        const sizeCalories = {
            small: 20,
            large: 40
        };

        const stuffingCalories = {
            cheese: 10,
            salad: 5,
            potato: 10
        };

        const toppingCalories = {
            mayo: 5
        };

        const baseCalories = sizeCalories[this.size] + stuffingCalories[this.stuffing];
        const toppingCalorie = this.toppings.reduce((acc, topping) => acc + toppingCalories[topping], 0);

        return baseCalories + toppingCalorie;
    }
}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SPICE);

console.log("Price with spice: " + hamburger.calculatePrice());
