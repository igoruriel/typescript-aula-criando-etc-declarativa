export function escapar () {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            let retorno = metodoOriginal.apply(this, args);
            if(typeof retorno === 'string') {
                // console.log(`@escapar em ação no ${this.constructor.name} para o método ${propertyKey}`);
                retorno = retorno.replace(/<script>[\s\S]*?<\/script>[\s\S]+/, '');
            }
            return retorno
        }

        return descriptor
    }
}