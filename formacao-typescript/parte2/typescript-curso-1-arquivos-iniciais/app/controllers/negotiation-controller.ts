import { Negotiation } from "../models/negotiation.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
import { Negotiations } from './../models/negotiations.js';

export class NegotiationController {
    //Inputs
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    //Negotiations
    private negotiations = new Negotiations();
    //Views
    private negotiationsView = new NegotiationsView('#negociacoesView');
    private messageView = new MessageView('#mensagemView');

    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.negotiationsView.update(this.negotiations);
    }

    public add(): void {
        const negotiation = this.createNegotiation();

        if (!this.isNotWeekend(negotiation.date)) {
            this.messageView.update('Apenas negociações em dias úteis são aceitas');
            return;
        } else {
            this.negotiations.addNegotiation(negotiation);
            this.clearForm();
            this.updateView();
        }
    }

    private createNegotiation(): Negotiation {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);

        return new Negotiation(
            date,
            quantity,
            value
        );
    }

    private clearForm(): void {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }

    private updateView(): void {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update('Negociação adicionada com sucesso');
    }

    private isNotWeekend(date: Date): boolean {
        const weekend = [
            0, // Sunday
            6 // Saturday
        ]
        return date.getDay() > weekend[0] && date.getDay() < weekend[1];
    }
}