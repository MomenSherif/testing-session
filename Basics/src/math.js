const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

const sumAsync = (a, b) =>
  new Promise(res => setTimeout(() => res(a + b), 4000));
