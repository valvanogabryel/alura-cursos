export class Negotiation {
    constructor(
        private readonly date: Date,
        private readonly quantity: number,
        private readonly value: number
    ) { }

    get volume(): number {
        return this.quantity * this.value;
    }
}