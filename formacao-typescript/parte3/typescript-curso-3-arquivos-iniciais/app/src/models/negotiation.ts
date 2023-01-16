import { Printable } from "../utils/printable.js";
//                       passar multiplas superclasses é impossível. Mas, o número de interfaces que se pode "implementar" é infinito. 
export class Negotiation implements Printable {
    constructor(
        private _date: Date,
        public readonly quantity: number,
        public readonly value: number
    ) { }

    public static createOf(dateString: string, quantityString: string, valueString: string): Negotiation {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantity = parseInt(quantityString);
        const value = parseFloat(valueString);
        return new Negotiation(
            date,
            quantity,
            value
        );
    }

    public toText(): string {
        return `
            Data: ${this.date},
            Quantidade: ${this.quantity},
            Valor: ${this.value}
            `
    }

    public isEqual(negotiation: Negotiation): boolean {
        return this.date.getDate() === negotiation.date.getDate()
            && this.date.getMonth() === negotiation.date.getMonth()
            && this.date.getFullYear() === negotiation.date.getFullYear()
    }

    get volume(): number {
        return this.quantity * this.value;
    }

    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
}