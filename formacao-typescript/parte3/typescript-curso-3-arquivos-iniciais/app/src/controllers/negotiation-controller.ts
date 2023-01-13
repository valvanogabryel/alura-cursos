import { Negotiation } from "../models/negotiation.js";
import { MessageView } from "../views/message-view.js";
import { Negotiations } from '../models/negotiations.js';
import { NegotiationsView } from "../views/negotiations-view.js";
import { DaysOfTheWeek } from "../enums/days-of-the-week.js";
import { logExecutionTime } from "../decorators/log-execution-time.js";
import { inspect } from "../decorators/inspect.js";
import { domInjector } from "../decorators/dom-injector.js";
import { NegotiationsServices } from '../services/negotiations-service.js';
import { print } from "../utils/print.js";

export class NegotiationController {
    //Inputs
    @domInjector('#data')
    private inputDate: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantity: HTMLInputElement;
    @domInjector('#valor')
    private inputValue: HTMLInputElement;
    //Negotiations
    private negotiations = new Negotiations();
    //Views
    private negotiationsView = new NegotiationsView('#negociacoesView');
    private messageView = new MessageView('#mensagemView');
    // Services
    private negotiationsServices = new NegotiationsServices();

    constructor() {
        this.negotiationsView.update(this.negotiations);
    }

    @logExecutionTime()
    @inspect
    public add(): void {
        const negotiation = Negotiation.createOf
            (
                this.inputDate.value,
                this.inputQuantity.value,
                this.inputValue.value
            );

        if (!this.isNotWeekend(negotiation.date)) {
            this.messageView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }

        this.negotiations.addNegotiation(negotiation);

        print(negotiation, this.negotiations);

        this.clearForm();
        this.updateView();
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

    public importData(): void {
        this.negotiationsServices
            .obtainDaysNegotiations()
            .then(todaysNegotiation => {
                for (let negotiation of todaysNegotiation) {
                    this.negotiations.addNegotiation(negotiation);
                }
                this.negotiationsView.update(this.negotiations);
            })

        // const response = await fetch('http://localhost:8080/dados');
        // const convertedResponse = await response.json();

        // const negotiationsApi = convertedResponse.map((data: daysNegotiation) => {
        //     return new Negotiation(new Date(), data.vezes, data.montante);
        // });

        // for (let negotiationApi of negotiationsApi) {
        //     this.negotiations.addNegotiation(negotiationApi);
        // }

        // this.negotiationsView.update(this.negotiations);

    }

    private isNotWeekend(date: Date): boolean {
        return date.getDay() > DaysOfTheWeek.SUNDAY
            && date.getDay() < DaysOfTheWeek.SATURDAY;
    }
}