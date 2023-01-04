export abstract class View<T> {
    //abstract impede a instância da classe View.
    protected element: HTMLElement;
    private scape = false;

    //                            o "?" faz com que o parâmetro seja opicional. 
    constructor(selector: string, scape?/*<------*/: boolean) {
        this.element = document.querySelector(selector);
        if (scape) { this.scape = scape }; //Caso nenhum parâmetro seja passado, o valor de "scape" será undefined. Ou seja, false, e não entrará no bloco de código. Caso seja true, o valor booleano será atribuído ao scape.
    }

    update(model: T): void {
        let template = this.template(model);
        // removes script tags
        if (this.scape) { template = template.replace(/<script>[\s\S]*?<\/script>/, '') };
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string;
    //Força as filhas a implementarem um método desconhecido pela Classe mãe.
}