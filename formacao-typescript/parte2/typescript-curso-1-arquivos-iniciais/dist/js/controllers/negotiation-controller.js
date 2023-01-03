import { Negotiation } from "../models/negotiation.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
import { Negotiations } from './../models/negotiations.js';
export class NegotiationController {
    constructor() {
        //Negotiations
        this.negotiations = new Negotiations();
        //Views
        this.negotiationsView = new NegotiationsView('#negociacoesView');
        this.messageView = new MessageView('#mensagemView');
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        const negotiation = this.createNegotiation();
        if (!this.isNotWeekend(negotiation.date)) {
            this.messageView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        else {
            this.negotiations.addNegotiation(negotiation);
            this.clearForm();
            this.updateView();
        }
    }
    createNegotiation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, quantity, value);
    }
    clearForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
    updateView() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update('Negociação adicionada com sucesso');
    }
    isNotWeekend(date) {
        const weekend = [
            0,
            6 // Saturday
        ];
        return date.getDay() > weekend[0] && date.getDay() < weekend[1];
    }
}
