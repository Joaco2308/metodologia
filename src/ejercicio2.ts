class Estudiante {

  agregarNota(promedio: number, nuevaNota: number): number {
    return (promedio + nuevaNota) / 2;
  }

  aprobar(nota: number, minima: number): boolean {
    return nota >= minima;
  }

  calcularFaltas(faltasActuales: number, nuevas: number): number {
    return faltasActuales + nuevas;
  }
}
 
const estudiante = new Estudiante();

let promedio = 8;

console.log("Promedio inicial:", promedio);
console.log("Nuevo promedio con nota 9:", estudiante.agregarNota(promedio, 9));
console.log("¿Aprueba con nota 7?:", estudiante.aprobar(7, 6));
console.log("Total de faltas:", estudiante.calcularFaltas(3, 2));
