const resultadoH2 = document.getElementById("result");
//INPUT
const inputOperation = document.getElementById("input-operation");

//BUTTONS
const buttons = document.querySelectorAll("button");
const clear = document.getElementById("C");

//FUNCION PARA ESCRIBIR LA OPERACION EN EL INPUT
const operation = [];
buttons.forEach((button) => {
  button.addEventListener("click", writeOperation);
  function writeOperation() {
    operation.push(button.value);
    inputOperation.value = operation.join("");
  }
});

// FUNCION BORRAR OPERACION COMPLETA INGRESADA
clear.addEventListener("click", clearOperation);

function clearOperation() {
  operation.length = 0;
  inputOperation.value = operation.join("");
  resultadoH2.textContent = 0;
}

//ELIMINAR EL ULTIMO ELEMENTO DE LA OPERACION
const delete_last = document.getElementById("button-delete");

delete_last.addEventListener("click", delete_last_Operation);

function delete_last_Operation() {
  operation.pop();
  operation.pop();
  inputOperation.value = operation.join("");
}

//DEFINIR OPERACIONES
//BOTON IGUAL
const igual = document.getElementById("button_igual");

igual.addEventListener("click", resultado);

function resultado() {
  //encontrar el signo para definir el tipo de operacion
  const signo = operation.find((element) => /[+-/*%]/.test(element));

  //sacar los operandos
  // console.log(operation);
  const aCaracter = operation.join("");
  const [number_a, number_b] = aCaracter.split(signo);
  // console.log("a: " + parseInt(number_a));
  // console.log("b: " + parseInt(number_b));

  //condicional para ejecutar la operacion
  if (signo === "-") {
    restar(number_a, number_b);
  } else if (signo === "+") {
    sumar(number_a, number_b);
  } else if (signo === "*") {
    multiplicar(number_a, number_b);
  } else if (signo === "/") {
    dividir(number_a, number_b);
  } else if (signo === "%") {
    calcularPorcentaje(number_a, number_b);
  }
}


function restar(number_a, number_b, c, d, e) {
  let resta = 0;

  if (number_a !== undefined) resta = number_a;
  if (number_b !== undefined) resta -= number_b;
  if (c !== undefined) resta -= c;
  if (d !== undefined) resta -= d;
  if (e !== undefined) resta -= e;

  resultadoH2.textContent = resta;
}


function sumar(number_a, number_b, c, d, e) {
    let suma = 0;
    
    if (number_a !== undefined) suma += parseInt(number_a);
    if (number_b !== undefined) suma += parseInt(number_b);
    if (c !== undefined) suma += c;
    if (d !== undefined) suma += d;
    if (e !== undefined) suma += e;
    
    resultadoH2.textContent = suma;
  }
  
  
  
  function multiplicar(number_a, number_b, c, d, e) {
    let producto = 1;
  
    if (number_a !== undefined) producto *= number_a;
    if (number_b !== undefined) producto *= number_b;
    if (c !== undefined) producto *= c;
    if (d !== undefined) producto *= d;
    if (e !== undefined) producto *= e;
  
    resultadoH2.textContent = producto;
  }
   
  
  function dividir(number_a, number_b, c, d, e) {
    let division = number_a;
    
    if (number_b !== undefined) division /= number_b;
    if (c !== undefined) division /= c;
    if (d !== undefined) division /= d;
    if (e !== undefined) division /= e;
    
    resultadoH2.textContent = division;
  }
  
  
  
  function calcularPorcentaje(number_a, number_b) {
    resultadoH2.textContent = number_a * (number_b / 100);
  }
  
  