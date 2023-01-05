export function scape(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let returnedMethod = originalMethod.apply(this, args);
        if (typeof returnedMethod === 'string') {
            console.log(`@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}`);
            returnedMethod = returnedMethod.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return returnedMethod;
    };
    return descriptor;
}
