import { Negotiation } from "../models/negotiation.js";
export class NegotiationController {
    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }
    add() {
        const negotiation = this.createNegotitation();
        console.log(negotiation);
    }
    createNegotitation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, quantity, value);
    }
}
