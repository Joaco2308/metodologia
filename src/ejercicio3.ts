class Auto {

  acelerar(velocidadActual: number, incremento: number): number {
    return velocidadActual + incremento;
  }

  frenar(velocidadActual: number, decremento: number): number {
    let nueva = velocidadActual - decremento;
    return nueva < 0 ? 0 : nueva;
  }

  recorrer(distancia: number, tiempo: number): number {
    return distancia / tiempo;
  }
}

const auto = new Auto();

let velocidad = 60;

console.log("Velocidad inicial:", velocidad);
console.log("Después de acelerar 20:", auto.acelerar(velocidad, 20));
console.log("Después de frenar 30:", auto.frenar(velocidad, 30));
console.log("Velocidad al recorrer 120 km en 2 horas:", auto.recorrer(120, 2));
