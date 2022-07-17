export function domInject (seletor: string) {
    return function (target: any, propertyKey: string) {
        console.log(`Modificando o ${target.constructor.name} e adicionando a propriedade ${propertyKey} no dom?`);
        
        let elemento: HTMLElement;
        
        const getter = function  () { 
            if(!elemento) {
                elemento =<HTMLElement>document.querySelector(seletor);
                console.log(`buscando o seletor no Dom da propriedade ${propertyKey}`);
            }
            return elemento
        }

        
        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter}
        );
    }
}