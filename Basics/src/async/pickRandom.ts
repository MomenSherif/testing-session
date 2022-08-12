export function pickRandomPromise<T>(array: T[]): Promise<T> {
  return new Promise(res =>
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * array.length);
      res(array[randomIndex]);
    }, 200),
  );
}
