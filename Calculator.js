function sumarCinco(a, b, c, d, f) {
    let suma = 0;
  
    if (a !== undefined) suma += a;
    if (b !== undefined) suma += b;
    if (c !== undefined) suma += c;
    if (d !== undefined) suma += d;
    if (e !== undefined) suma += e;
  
    console.log("La suma de los números proporcionados es:", suma);
  }
  
  // Ejemplos de uso
  
  sumarCinco(1, 2, 3, 4, 5);
  
  function restarCinco(a, b, c, d, e) {
    console.log("La resta de", a, ",", b, ",", c, ",", d, "y", e, "es:", a - b - c - d - e);
  }
  
  
  function multiplicarCinco(a, b, c, d, e) {
    console.log("El producto de", a, ",", b, ",", c, ",", d, "y", e, "es:", a * b * c * d * e);
  }
  
  
  function dividirCinco(a, b, c, d, e) {
    console.log("La división de", a, "por", b, ",", c, ",", d, "y", e, "es:", a / b / c / d / e);
  }
  
  
  function calcularPorcentajeCinco(numero, porcentaje) {
    console.log(porcentaje + "% de", numero, "es:", (numero * (porcentaje / 100)));
  }
  
  restarCinco(10, 2, 3, 4, 1); 
  multiplicarCinco(1, 2, 3, 4, 5); 
  dividirCinco(100, 2, 5, 4, 1); 
  calcularPorcentajeCinco(200, 25); 