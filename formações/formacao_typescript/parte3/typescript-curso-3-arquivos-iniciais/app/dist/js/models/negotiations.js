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
    isEqual(negotiations) {
        return JSON.stringify(negotiations.list()) === JSON.stringify(negotiations);
    }
}
const negotiations = new Negotiations();
negotiations.list().forEach(n => n.value);
//# sourceMappingURL=negotiations.js.map