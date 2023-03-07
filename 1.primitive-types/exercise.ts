
// Convert this file to TypeScript and run it with npx ts-node exercise.ts

function fib(n) {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib5 = fib(5);

function logFib(something) {
  console.log(something);
}

logFib(fib5);
