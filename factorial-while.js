function factorialWhile(n) {
  let result = 1;
  let i = 1;
  while (i <= n) {
    result *= i;
    i++;
  }
  return result;
}

const number = 10;
console.log(`El factorial de ${number} es: ${factorialWhile(number)}`);
