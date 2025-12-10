class Restaurante {

  calcularTotal(precio: number, cantidad: number): number {
    return precio * cantidad;
  }

  aplicarDescuento(total: number, descuento: number): number {
    return total - (total * descuento / 100);
  }

  calcularPropina(total: number, porcentaje: number): number {
    return total * (porcentaje / 100);
  }
}

const restaurante = new Restaurante();

let precio = 10;
let cantidad = 5;

console.log("Precio por plato:", precio);
console.log("Cantidad:", cantidad);
console.log("Total a pagar:", restaurante.calcularTotal(precio, cantidad));
console.log("Total con 10% de descuento:", restaurante.aplicarDescuento(50, 10));
console.log("Propina del 15%:", restaurante.calcularPropina(50, 15));

