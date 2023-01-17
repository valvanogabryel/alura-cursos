import { Printable } from "../utils/printable.js";
import { Comparable } from "./comparable.js";
//   Classes não podem "extender" mais de uma interface, somente "implementar". Porém, interfaces podem "extender" outras interfaces.
export interface Model<T> extends Printable, Comparable<T> {
    //a interface Model obrigará as classes cujo implementarem-na a ter os métodos "toText()" e "isEqual()"
}   