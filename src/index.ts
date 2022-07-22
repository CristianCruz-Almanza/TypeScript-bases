/*
    ===== Código de TypeScript =====
*/

//DESUSTRUCTURACION

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio : 2015
    }
}
/*
    desustructuracion -> no es mas que extraer directamente ciertas propiedades
    que les interese de un objeto y crear variables
*/

const{volumen,segundo,cancion, detalles} = reproductor;
const{autor} = detalles;

console.log('el volumen actual de : ', volumen );
console.log('el volumen actual de : ', segundo );
console.log('el volumen actual de : ', cancion );
console.log('el volumen actual de : ', autor );