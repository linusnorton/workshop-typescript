
const add10 = (x) => x + 10;
const multiplyBy2 = (x) => x * 2;
const divideBy4 = (x) => x / 4;

const compose = (...fns) =>
  (arg) =>
    fns.reduce((lastResult, fn) => fn(lastResult), arg);

const add10AndMultiplyBy2AndDivideBy4 = compose(add10, multiplyBy2, divideBy4);
add10AndMultiplyBy2AndDivideBy4(25);
