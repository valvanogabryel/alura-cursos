import { Negotiation } from "./negotiation.js";

export class Negotiations {
    private negotiations: Array<Negotiation> = [];

    addNegotiation(negotiation: Negotiation): void {
        this.negotiations.push(negotiation);
    }

    list(): Array<Negotiation> {
        return this.negotiations;
    }
}

const negotiations = new Negotiations();
negotiations.list().forEach(n => n.volume);
