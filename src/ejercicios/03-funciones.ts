/*
    ===== Código de TypeScript =====
*/

//crear funcion

/*
    al poner :number despues de la funcion estamos 
    obligando a que nos retorne un valor de ese tipo
*/
function sumar(a: number, b:number): number{
    return a + b;
}


//metodo con flecha
const sumarFlecha = (a: number, b:number) :number => {
    return a + b;
}

/*
    en una funcion de mas de 2 parametros siempre va
    primero los obligatorios , luego los opcionales y
    por ultimo los que tienen algun valor asiganado por defecto
*/
function multiplicar(numero: number, otroNumero?:number, base:number = 2):number{
    return numero * otroNumero * base;
}
/*
    const result = multiplicar(5,2);
    console.log(result);
*/

//interface son como clases "tontas"
interface PersonajeLOL{
    nombre: string;
    pv: number;
    mostrarHp: () => void; //definir funciones en interface
}

function curar(personaje:PersonajeLOL, curarX:number): void{ //void no retorna nada
    personaje.pv += curarX;
    
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOL = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida:', this.pv);
    }
}
curar(nuevoPersonaje,20);
