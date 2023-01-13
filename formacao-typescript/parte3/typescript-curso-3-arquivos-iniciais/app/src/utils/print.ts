import { Negotiation } from './../models/negotiation.js';

export function print(...objs: any[]) {
    objs.forEach(obj => {
        console.log(obj.toText());
    })
}