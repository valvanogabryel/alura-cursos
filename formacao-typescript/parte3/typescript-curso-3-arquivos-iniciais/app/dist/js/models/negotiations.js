export class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    addNegotiation(negotiation) {
        this.negotiations.push(negotiation);
    }
    list() {
        return [...this.negotiations];
    }
    toText() {
        return JSON.stringify(this.negotiations, null, 2);
    }
}
const negotiations = new Negotiations();
negotiations.list().forEach(n => n.value);
