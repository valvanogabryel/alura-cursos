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
        console.log(this.inputDate);
        console.log(this.inputQuantity);
        console.log(this.inputValue);
    }

}