/*
    ===== Código de TypeScript =====
*/

//Arreglo
//Formato para recibir varios tipos de variables es asi -- (boolean | string | number)
let habilidades: string []= ['Bash','Counter','Healing'];

/*
   interfaces- es una serie de llaves para asegurarnos de que un codigo
   sea como nosotros queramos o como un objeto queramos como lusca
*/
interface Personaje {
    nombre: String;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

//Objetos
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';
console.table(personaje);