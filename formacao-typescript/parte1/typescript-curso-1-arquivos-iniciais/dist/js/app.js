import { Negociation } from "./models/negociation.js";
const negociation1 = new Negociation(new Date(), 100, 150);
console.log(negociation1.date);
console.log(negociation1.volume);
