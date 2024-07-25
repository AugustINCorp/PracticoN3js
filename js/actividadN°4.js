/*
4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/
console.log(numero)

function numParImpar(numero = 4) {
  if (numero % 2 === 0) {
    console.log(`<p>Tu número es Par: ${numero}</p>`)
  } else {
    console.log(`<p>Tu número es Impar: ${numero}</p>`)
  }
}
