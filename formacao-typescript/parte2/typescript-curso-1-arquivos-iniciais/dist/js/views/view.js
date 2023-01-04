export class View {
    //                            o "?" faz com que o parâmetro seja opicional. 
    constructor(selector, scape) {
        this.scape = false;
        this.element = document.querySelector(selector);
        if (scape) {
            this.scape = scape;
        }
        ; //Caso nenhum parâmetro seja passado, o valor de "scape" será undefined. Ou seja, false, e não entrará no bloco de código. Caso seja true, o valor booleano será atribuído ao scape.
    }
    update(model) {
        let template = this.template(model);
        // removes script tags
        if (this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        ;
        this.element.innerHTML = template;
    }
}
