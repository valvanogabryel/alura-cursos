export function logExecutionTime() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const returnedMethod = originalMethod.apply(this, args);
            console.log(this);
            console.log(args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / 1000}`);
            returnedMethod;
        };
        return descriptor;
    };
}
