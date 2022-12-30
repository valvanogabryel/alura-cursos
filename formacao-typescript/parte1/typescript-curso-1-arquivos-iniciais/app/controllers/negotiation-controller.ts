import { Negotiation } from "../models/negotiation.js";

export class NegotiationController {
    private inputDate;
    private inputQuantity;
    private inputValue;

    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }

    add() {
        const negotiation = new Negotiation(
            this.inputDate.value,
            this.inputQuantity.value,
            this.inputValue.value
        )

        console.log(negotiation);
        return negotiation;
    }

}