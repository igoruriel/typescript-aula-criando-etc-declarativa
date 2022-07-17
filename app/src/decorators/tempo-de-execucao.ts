export function tempoDeExecucao () {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value; 
        descriptor.value = function() {
            const t1 = performance.now();
            const retorno = metodoOriginal();
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de exec.: ${(t1-t2)/1000}s`);
            retorno
        }

        return descriptor
    }
}