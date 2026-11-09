export function fibonacci(n) {
  if (n < 0) {
    throw new RangeError;
  }
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function esPinValido(pin) {
  if (!pin || (pin.length !== 4 && pin.length !== 6)) {
    return false;
  }

  if (!/^[0-9]+$/.test(pin)) {
    return false;
  }

  const todosIguales = pin.split('').every(digito => digito === pin[0]);
  if (todosIguales) {
    return false;
  }

  return true;
}