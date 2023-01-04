import { Negotiation } from "./negotiation.js";

export class Negotiations {
    private negotiations:
        Array<Negotiation> = [];
    //- Negotiation[] = [];

    public addNegotiation(negotiation: Negotiation): void {
        this.negotiations.push(negotiation);
    }

    public list(): ReadonlyArray<Negotiation> {
        return [...this.negotiations];
    }
}

const negotiations = new Negotiations();
negotiations.list().forEach(n => n.value);
