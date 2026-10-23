/*

Dado un arreglo de objetos relacionado con el tema de su proyecto (productos, cursos, tareas, videojuegos etc.), obtener:

*Una lista filtrada según un criterio relevante.
*El total de un campo numérico.
*El promedio de ese campo.
*Una lista ordenada por algún campo.
*Restricción: no se permite usar ciclos clásicos (for, while). Solo métodos de arreglo.

Requisitos mínimos
Al menos 5 objetos, cada uno con 4 o más propiedades.
Usar al menos una vez: desestructuración, spread, ?. y ??.
No mutar el arreglo original (verificar con console.log).
Plantilla base:
const datos = [ // al menos 5 objetos de su proyecto ];

const filtrados =  ... ;
const total =  ... ;
const promedio =  ... ;
const ordenados =  ... ;

console.log({ filtrados, total, promedio, ordenados });

Entrega
Subir el commit, en repositorio del mismo ejercicio pasado o de su proyecto.


*/ 

const platos = [
    {
        nombre: "Pizza",
        ingredientes: ["queso", "tomate", "albahaca"],
        pedidos: 12,
        precio: 140,
        disponible: true
    },
    {
        nombre: "Hamburguesa Clásica",
        ingredientes: ["pan", "carne", "lechuga"],
        pedidos: 20,
        precio: 110,
        disponible: true
    },
    {
        nombre: "Pasta Alfredo",
        ingredientes: ["pasta", "crema", "queso"],
        pedidos: 8,
        precio: 160,
        disponible: true
    },
    {
        nombre: "Ensalada César",
        ingredientes: ["lechuga", "pollo", "aderezo"],
        pedidos: 6,
        precio: 85,
        disponible: false
    },
    {
        nombre: "Limonada",
        ingredientes: ["limón", "agua", "azúcar"],
        pedidos: 15,
        precio: 35,
        disponible: true
    }
];

const filtrados = platos.filter(
    p => p.disponible
);


const total = platos.reduce((acumulado, { precio }) => acumulado + precio,0);

const promedio = total / platos.length;

const ordenados = [...platos].sort(
    (a, b) => a.precio - b.precio
);


console.log({"original:": platos });

console.log({"filtrados:": filtrados });

console.log({"total:":total});

console.log({"promedio:":promedio });

console.log({ "ordenados:":ordenados });

