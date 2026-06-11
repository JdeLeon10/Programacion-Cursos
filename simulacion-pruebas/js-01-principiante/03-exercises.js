// Ejercicio 3:
function fizzBuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz";
  } else if (num % 5 == 0) {
    return "Buzz";
  } else if (num % 3 == 0) {
    return "Fizz";
  } else {
    return String(num);
  }
}

console.log(fizzBuzz(3) === "Fizz"); // true
console.log(fizzBuzz(5) === "Buzz"); // true
console.log(fizzBuzz(15) === "FizzBuzz"); // true
console.log(fizzBuzz(7) === "7"); // true
