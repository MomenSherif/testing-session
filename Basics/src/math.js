export const sum = (a, b) => a + b;
export const subtract = (a, b) => a - b;

export const sumAsync = (a, b) =>
  new Promise(res => setTimeout(() => res(a + b), 4000));
