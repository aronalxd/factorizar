function factorialBreak(n) {
  let result = 1;
  let i = 1;
  while (true) {
    result *= i;
    if (i === n) {
      break;
    }
    i++;
  }
  return result;
}

const number = 10;
console.log(`El factorial de ${number} es: ${factorialBreak(number)}`);
