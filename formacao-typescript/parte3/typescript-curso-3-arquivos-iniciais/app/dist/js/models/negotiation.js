export class Negotiation {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    static createOf(dateString, quantityString, valueString) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantity = parseInt(quantityString);
        const value = parseFloat(valueString);
        return new Negotiation(date, quantity, value);
    }
    toText() {
        return `
            Data: ${this.date},
            Quantidade: ${this.quantity},
            Valor: ${this.value}
            `;
    }
    get volume() {
        return this.quantity * this.value;
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
}
