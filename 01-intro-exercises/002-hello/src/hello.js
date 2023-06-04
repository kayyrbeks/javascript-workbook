export function sayHello(name) {
  if (name === null || name === "") return `Entered empty string or nothing`;
  return `Hello, ${name} ✌!`;
}
