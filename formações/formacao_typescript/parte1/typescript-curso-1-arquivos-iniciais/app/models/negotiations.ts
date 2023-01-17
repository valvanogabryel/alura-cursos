import { Negotiation } from "./negotiation.js";

export class Negotiations {
    private negotiations:
        Array<Negotiation> = [];
    //- Negotiation[] = [];

    addNegotiation(negotiation: Negotiation): void {
        this.negotiations.push(negotiation);
    }

    list(): ReadonlyArray<Negotiation> {
        return [...this.negotiations];
    }
}

const negotiations = new Negotiations();
negotiations.list().forEach(n => n.value);
