export class Negociation {
    #date;
    #quantity;
    #value;

    constructor(date, quantity, value) {
        this.#date = date;
        this.#quantity = quantity;
        this.#value = value;
    }
}