export class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    //- Negotiation[] = [];
    addNegotiation(negotiation) {
        this.negotiations.push(negotiation);
    }
    list() {
        return [...this.negotiations];
    }
}
const negotiations = new Negotiations();
negotiations.list().forEach(n => n.value);
