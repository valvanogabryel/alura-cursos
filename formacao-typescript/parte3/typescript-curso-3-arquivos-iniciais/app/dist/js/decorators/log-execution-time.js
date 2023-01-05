export function logExecutionTime() {
    return function (target, propertyKey, descriptor) { console.log(descriptor); };
}
