import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from '../models/negotiations.js';
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
import { DaysOfTheWeek } from "../enums/days-of-the-week.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView('#negociacoesView', true);
        this.messageView = new MessageView('#mensagemView', false);
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        const negotiation = Negotiation.createOf(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!this.isNotWeekend(negotiation.date)) {
            this.messageView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.negotiations.addNegotiation(negotiation);
        this.clearForm();
        this.updateView();
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
        return date.getDay() > DaysOfTheWeek.SUNDAY
            && date.getDay() < DaysOfTheWeek.SATURDAY;
    }
}
