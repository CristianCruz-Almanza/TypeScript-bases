export interface Producto { // export para que otras funciones puedan consumir esta interface
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Air',
    precio: 350
}
const tableta: Producto = {
    desc: 'Air',
    precio: 350
}

export function calculaISV(productos:Producto[]): [number,number]{
    let total = 0;
    productos.forEach(  ({precio}) =>  {
        total += precio;
    })
    return [total, total * 0.15];
}
// const articulos = [telefono, tableta];
// const [total, isv] = calculaISV(articulos);
// console.log('total', total);
// console.log('ISV', isv);