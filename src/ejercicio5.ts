class Hospital {

  calcularDosis(peso: number, mgPorKg: number): number {
    return peso * mgPorKg;
  }

  calcularIMC(peso: number, altura: number): number {
    return peso / (altura * altura);
  }

  registrarVisitas(visitasActuales: number, nuevas: number): number {
    return visitasActuales + nuevas;
  }
}

const hospital = new Hospital();

let peso = 70;
let altura = 1.75;

console.log("Peso del paciente:", peso);
console.log("Altura del paciente:", altura);
console.log("Dosis a aplicar:", hospital.calcularDosis(peso, 2));
console.log("IMC del paciente:", hospital.calcularIMC(peso, altura));
console.log("Total de visitas:", hospital.registrarVisitas(5, 3));
