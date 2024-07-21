/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/


const ciudades = [
  "Barcelona, España",
  "Tokio, Japón",
  "Londres, Reino Unido",
  "Roma, Italia",
  "Pekín, China",
  "Río de Janeiro, Brasil",
  "Ámsterdam, Países Bajos",
  "Sídney, Australia",
];

console.log(ciudades)

ciudades.unshift('Nueva York, Estados Unidos')

ciudades.push('Paris')

ciudades.splice(9,0,'El Cairo, Egipto')
ciudades.splice(1,0,'Barcelona')

document.write(`<h2>Arreglo de ciudades</h2>`);
document.write("<ul>");
for (let i = 0; i < ciudades.length; i++) {
  document.write(`<li>${ciudades[i]}</li>`);
}
document.write("</ul>");



