import { Printable } from './printable.js';

export function print(...objs: /*Array<Printable>*/ Printable[]) {
    objs.forEach(obj => {
        console.log(obj.toText());
    })
}