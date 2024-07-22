/*
4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/const numero = parseInt(prompt("Ingresa un número:"));

function parOImpar(numero) {
  if (numero % 2 === 0) {
    return document.write("<p>Tu número es par</p>");
  } else {
    return document.write("<p>Tu número es impar</p>");
  }
}

console.log(parOImpar)