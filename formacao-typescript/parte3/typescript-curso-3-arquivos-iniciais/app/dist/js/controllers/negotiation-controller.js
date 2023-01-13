var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Negotiation } from "../models/negotiation.js";
import { MessageView } from "../views/message-view.js";
import { Negotiations } from '../models/negotiations.js';
import { NegotiationsView } from "../views/negotiations-view.js";
import { DaysOfTheWeek } from "../enums/days-of-the-week.js";
import { logExecutionTime } from "../decorators/log-execution-time.js";
import { inspect } from "../decorators/inspect.js";
import { domInjector } from "../decorators/dom-injector.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView('#negociacoesView');
        this.messageView = new MessageView('#mensagemView');
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
    importData() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('http://localhost:8080/dados');
            let convertedResponse = yield response.json();
            console.log(convertedResponse);
            return convertedResponse;
        });
    }
    isNotWeekend(date) {
        return date.getDay() > DaysOfTheWeek.SUNDAY
            && date.getDay() < DaysOfTheWeek.SATURDAY;
    }
}
__decorate([
    domInjector('#data')
], NegotiationController.prototype, "inputDate", void 0);
__decorate([
    domInjector('#quantidade')
], NegotiationController.prototype, "inputQuantity", void 0);
__decorate([
    domInjector('#valor')
], NegotiationController.prototype, "inputValue", void 0);
__decorate([
    logExecutionTime(),
    inspect
], NegotiationController.prototype, "add", null);
