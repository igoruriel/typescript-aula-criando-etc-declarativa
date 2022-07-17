export function escapar() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let retorno = metodoOriginal.apply(this, args);
            if (typeof retorno === 'string') {
                retorno = retorno.replace(/<script>[\s\S]*?<\/script>[\s\S]+/, '');
            }
            return retorno;
        };
        return descriptor;
    };
}
