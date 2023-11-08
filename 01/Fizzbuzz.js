// Función Fizzbuzz que toma un número como entrada y aplica las reglas de FizzBuzz.

function Fizzbuzz(num) {
  // Comprobamos si el argumento pasado es un número
  if (typeof num != "number") {
    return "Error: the argument must be a nuumber";
  }

  const divisible = (divisor, num) => num % divisor === 0;

  if (num === 0) {
    return 0;
  }

  if (divisible(3, num) && divisible(5, num)) {
    return "FizzBuzz";
  }

  if (divisible(3, num)) {
    return "Fizz";
  }

  if (divisible(5, num)) {
    return "Buzz";
  }

  return num;
}

// Función print que muestra los resultados de Fizzbuzz en un rango de números.

function print(num) {
  for (let i = 0; i < num; i++) {
    console.log(`${i}: ${Fizzbuzz(i)}`);
  }
}

// Llamamos a la función print con un valor de ejemplo.
print(16);

module.exports = Fizzbuzz;

// if (num === 0) {
//     return 0;
//   }
//   if (num % 3 === 0 && num % 5 === 0) {
//     return "FizzBuzz";
//   }
//   if (num % 3 === 0) {
//     return "Fizz";
//   }
//   if (num % 5 === 0) {
//     return "Buzz";
//   }
//   return num;
