export function fibonacci(n) {
  if (n < 0) {
    throw new RangeError;
  }
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}