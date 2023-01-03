export abstract class View<T> {
    //abstract impede a instância da classe View.
    protected element: HTMLElement;

    constructor(selector: string) {
        this.element = document.querySelector(selector);
    }

    update(model: T): void {
        const template = this.template(model);
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string;
    //Força as filhas a implementarem um método desconhecido pela Classe mãe.
}