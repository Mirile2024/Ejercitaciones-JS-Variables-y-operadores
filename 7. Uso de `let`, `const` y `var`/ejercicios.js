// Ejercicio 7.1: Declara una variable usando 'let' dentro de un bloque de código ('{}') y muestra que no está disponible fuera del bloque.
// Ejercicio 7.2: Declara una constante 'PI' y asígnale el valor '3.14159'. Intenta reasignar otro valor a 'PI' y observa lo que ocurre.
// Ejercicio 7.3: Declara una variable 'mensaje' usando 'var' y asígnale el valor "Hola Mundo". Declara la misma variable 'mensaje' dentro de una función y asígnale un valor diferente. Muestra ambos valores en la consola para ver cómo 'var' afecta el alcance de las variables.

// Ejercicio 7.1:
let name=('{Hola soy miriam}')
console.log(name)   
// Ejercicio 7.2:
let pi = '3.14159'
console.log(pi)
// let pi = '131333'
// console.log(pi)     tira error
// Ejercicio 7.3:
var mensaje="Hola Mundo"
console.log(mensaje)

const saludar = function () {
    var mensaje="Adios Mundo "
    console.log(mensaje)
}
    saludar()
  