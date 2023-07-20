function factorialFor(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

const number = 10;
console.log(`El factorial de ${number} es: ${factorialFor(number)}`);
