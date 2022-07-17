export function escapar() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let retorno = metodoOriginal.apply(this, args);
            if (typeof retorno === 'string') {
                console.log(`@escapar em ação no ${this.constructor.name} para o método ${propertyKey}`);
                retorno = retorno.replace(/<script>[\s\S]*?<\/script>[\s\S]+/, '');
            }
            return retorno;
        };
        return descriptor;
    };
}
