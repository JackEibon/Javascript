
function crearContadorPedidos() {
    let n = 0;

    return function() {
        n++;
        return n;
    };
}

const contarPedido = crearContadorPedidos();

console.log(contarPedido()); 
console.log(contarPedido()); 
console.log(contarPedido()); 
/*
const restaurante = {
    nombre: "Heart of greece",

    mostrarNombre: function() {
        console.log(this.nombre);
    }
};
restaurante.mostrarNombre();
*/

const restaurante = {
    nombre: "Heart of greece",

    mostrarNombre: function() {
        const mostrar = () => {
            console.log(this.nombre);
        };

        mostrar();
    }
};

restaurante.mostrarNombre(); 


class Platillo {
    #precio
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.#precio = precio;
    }

    mostrarInformacion() {
         console.log(this.nombre);
         console.log(this.precio);
         return true;
    }
    get getPrecioConImpuesto() {
        return this.#precio * 1.16;
    }

    set setPrecio(nuevoPrecio) {
        if (nuevoPrecio > 0) {
            this.#precio = nuevoPrecio;
        }
    }
}

const pizza = new Platillo("Pizza", 130);

console.log(pizza.mostrarInformacion());


class drink extends Platillo {
    constructor(nombre, precio, size) {
        super(nombre, precio);
        this.size = size;
    }

    mostrarInformacion() {
        console.log(this.nombre);
         console.log(this.precio);
         console.log(this.size);
    }
}

const limonada = new drink("Limonada", 35, "500 ml");

console.log(limonada.mostrarInformacion());

console.log(pizza.mostrarInformacion()); 
console.log("precio con impuesto :" + pizza.getPrecioConImpuesto); 
console.log("se cambio el precio a 140"); 
pizza.setPrecio = 140;
console.log(pizza.mostrarInformacion()); 
console.log("precio con impuesto :" + pizza.getPrecioConImpuesto); 
//console.log("precio error"+ pizza.#precio);
