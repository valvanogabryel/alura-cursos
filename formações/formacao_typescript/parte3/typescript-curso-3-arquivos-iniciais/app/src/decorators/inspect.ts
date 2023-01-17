export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`--- Método: ${propertyKey}`);
        console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
        const returnedMethod = originalMethod.apply(this, args);
        console.log(`------ Retorno: ${returnedMethod}`);

        return returnedMethod;
    }

    return descriptor;
}

// Quando a função não receber parâmetros, o retorno da segunda função pode ser omitido do código. Porém, para evitar futuros problemas, é sempre indicado que faça: 

/* 
export function inspect() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
        ) { ... }
        
    }
*/