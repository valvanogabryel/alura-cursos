export abstract class View<T> {
    //abstract impede a instância da classe View.
    protected element: HTMLElement;
    private scape = false;

    constructor(selector: string) {
        this.element = document.querySelector(selector);
    }

    update(model: T): void {
        let template = this.template(model);
        if (this.scape) { template = template.replace(/<script>[\s\S]*?<\/script>/, '') };
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string;
    //Força as filhas a implementarem um método desconhecido pela Classe mãe.
}