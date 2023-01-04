export class View {
    constructor(selector, scape) {
        this.scape = false;
        this.element = document.querySelector(selector);
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
