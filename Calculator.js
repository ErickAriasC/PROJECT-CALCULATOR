function sumarCinco(a, b, c, d, e) {
    let suma = 0;
    
    if (a !== undefined) suma += a;
    if (b !== undefined) suma += b;
    if (c !== undefined) suma += c;
    if (d !== undefined) suma += d;
    if (e !== undefined) suma += e;
    
    console.log("La suma de los números proporcionados es:", suma);
  }
  
  sumarCinco(1, 2, 3, 4, 5); 
  
  
  function restarCinco(a, b, c, d, e) {
    let resta = 0;
    
    if (a !== undefined) resta = a;
    if (b !== undefined) resta -= b;
    if (c !== undefined) resta -= c;
    if (d !== undefined) resta -= d;
    if (e !== undefined) resta -= e;
    
    console.log("La resta de los números proporcionados es:", resta);
  }
  
  
  restarCinco(10, 2, 3, 4, 1); 
  
  
  function multiplicarCinco(a, b, c, d, e) {
    let producto = 1;
  
    if (a !== undefined) producto *= a;
    if (b !== undefined) producto *= b;
    if (c !== undefined) producto *= c;
    if (d !== undefined) producto *= d;
    if (e !== undefined) producto *= e;
  
    console.log("El producto de los números proporcionados es:", producto);
  }
  
  
  multiplicarCinco(1, 2, 3, 4, 5); 
  
  
  function dividirCinco(a, b, c, d, e) {
    let division = a;
    
    if (b !== undefined) division /= b;
    if (c !== undefined) division /= c;
    if (d !== undefined) division /= d;
    if (e !== undefined) division /= e;
    
    console.log("La división de los números proporcionados es:", division);
  }
  
  
  dividirCinco(100, 2, 5, 4, 1); 
  
  
  function calcularPorcentajeCinco(numero, porcentaje) {
    numero = Math.min(numero, 99999);
  
    console.log(porcentaje + "% de", numero, "es:", (numero * (porcentaje / 100)));
  }
  
  
  calcularPorcentajeCinco(200, 25); 
  
  