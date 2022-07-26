
/*
    una de las ventajas que tenemos en las clases es que
    podemos definir si son privadas, public o static
*/
class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe extends PersonaNormal{ // extender una clase se usa extends
    /*
        El constructor es una funcion que se va a llamar cuando creo una instancia
        de mi clase
    */
    constructor ( // forma corta de hacer
        public alterEgo : string,
        public edad: number,
        public nombreReal: string,
    ){
        super(nombreReal,'New York, USA');
    }
}

const ironman = new Heroe('Ironman',45, 'Tony');
console.log(ironman);