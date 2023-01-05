export function logExecutionTime() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) { console.log(descriptor) }
}
