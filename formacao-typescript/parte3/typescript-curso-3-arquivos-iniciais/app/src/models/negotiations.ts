import { Printable } from "../utils/printable.js";
import { Negotiation } from "./negotiation.js";

export class Negotiations extends Printable {
    private negotiations:
        Array<Negotiation> = [];
    //- Negotiation[] = [];

    public addNegotiation(negotiation: Negotiation): void {
        this.negotiations.push(negotiation);
    }

    public list(): ReadonlyArray<Negotiation> {
        return [...this.negotiations];
    }

    public toText(): string {
        return JSON.stringify(this.negotiations, null, 2);
    }
}

const negotiations = new Negotiations();
negotiations.list().forEach(n => n.value);
