export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
        let returnedMethod = originalMethod.apply(this, args);
        if (typeof returnedMethod === 'string') {
            console.log(`@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}`)
            returnedMethod = returnedMethod.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        return returnedMethod;
    }

    return descriptor;
}

//Caso nenhum parâmetro seja passado, o valor de "escape" será undefined. Ou seja, false, e não entrará no bloco de código. Caso seja true, o valor booleano será atribuído ao escape.