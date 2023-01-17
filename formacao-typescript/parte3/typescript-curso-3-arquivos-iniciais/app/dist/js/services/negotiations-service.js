import { Negotiation } from './../models/negotiation.js';
export class NegotiationsServices {
    obtainDaysNegotiations() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((data) => {
            return data.map((todaysData) => {
                return new Negotiation(new Date(), todaysData.vezes, todaysData.montante);
            });
        });
    }
}
//# sourceMappingURL=negotiations-service.js.map