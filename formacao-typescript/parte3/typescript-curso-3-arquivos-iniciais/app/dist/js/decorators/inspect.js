export function inspect(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Método: ${propertyKey}`);
        console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
        const returnedMethod = originalMethod.apply(this, args);
        console.log(`------ Retorno: ${returnedMethod}`);
        return returnedMethod;
    };
    return descriptor;
}
