import { Comparable } from "../interfaces/comparable.js";
import { Printable } from "../utils/printable.js";
import { Negotiation } from "./negotiation.js";
//                        "implements" herda de uma interface. Diferentemente do "extends", que herda somente de uma classe. 
export class Negotiations implements Printable, Comparable<Negotiations> {
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

    public isEqual(negotiations: Negotiations): boolean {
        return JSON.stringify(negotiations.list()) === JSON.stringify(negotiations);
    }
}

const negotiations = new Negotiations();
negotiations.list().forEach(n => n.value);
