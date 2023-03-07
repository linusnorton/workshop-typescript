
const add10 = (x) => x + 10;
const multiplyBy2 = (x) => x * 2;
const sum = (...nums) => nums.reduce((acc, num) => acc + num, 0);

const compose = (...fns) =>
  (arg) =>
    fns.reduce((lastResult, fn) => fn(lastResult), arg);

const add10AndMultiplyBy2AndSum = compose(add10, multiplyBy2, sum);
