export function domInject(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando o ${target.constructor.name} e adicionando a propriedade ${propertyKey} no dom?`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`buscando o seletor no Dom da propriedade ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
