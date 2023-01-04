import { logExecutionTime } from "../decorators/log-execution-time.js";

export abstract class View<T> {
    //abstract impede a instância da classe View.
    protected element: HTMLElement;
    private scape = false;

    //o "?" faz com que o parâmetro seja opicional. Os parâmetros opicionais devem sempre ficar por último. 
    //4 parâmetros obrigatórios e 5 opicionais em sequência (funciona);
    //2 parâmetros obrigatórios, 1 parâmetro opicional e outro parâmetro obrigatório (não funciona);
    constructor(selector: string, scape?/*<------*/: boolean) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw new Error(`Seletor ${selector} não existe`);
        }
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