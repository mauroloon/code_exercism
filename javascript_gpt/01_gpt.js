
/* Ejercicio 1: Números pares en un rango
Descripción:
Crea una función llamada obtenerNumerosPares que reciba dos números enteros como parámetros (inicio y fin). La función debe devolver un arreglo con todos los números pares entre esos dos números, inclusive. Si no hay números pares en el rango, devuelve un arreglo vacío.

Requisitos:

Asegúrate de que inicio sea menor o igual a fin. Si no es así, invierte los valores.
Usa un bucle para generar los números. */

export function obtenerNumerosPares(inicio, fin) {
    const [init, end] = inicio <= fin ? [inicio, fin] : [fin, inicio];
    return Array.from(
        { length: Math.floor((end - init) / 2) + 1 },
        (_, i) => init + i * 2 + (init % 2 ? 1 : 0)
    ).filter(n => n <= end);
}
const numerosPares = obtenerNumerosPares(1, 10);
console.log(numerosPares); // [2, 4, 6, 8, 10]