import { Negotiation } from './../models/negotiation.js';
import { daysNegotiation } from './../interfaces/days-negotiation.js';

export class NegotiationsServices {

    public obtainDaysNegotiations(): Promise<Negotiation[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((data: daysNegotiation[]) => {
                return data.map((todaysData) => {
                    return new Negotiation(
                        new Date(),
                        todaysData.vezes,
                        todaysData.montante
                    )
                })
            });
    }
}

