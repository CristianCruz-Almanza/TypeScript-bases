

/*
    Genericos
*/

function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(87);
let soyArreglo = queTipoSoy([1,2,5,3,6]);
let soyExplicito = queTipoSoy<number>(574);