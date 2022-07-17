export function inspetor() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`propertyKey: ${propertyKey}`);
            console.log(`Args:${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        };
        return descriptor;
    };
}
