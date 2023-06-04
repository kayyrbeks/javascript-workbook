import { expect, it } from "vitest";
import { sayHello } from "./hello.js";

it("should say hello message to the user using entered name", () => {
  const input = "James";

  const result = sayHello(input);

  expect(result).toBe("Hello, James ✌!");
});

it("should display a message if entered empty string", () => {
  const input = "";

  const result = sayHello(input);

  expect(result).toBe("Entered empty string or nothing");
});

it("should display a message if nothing entered", () => {
  const input = null;

  const result = sayHello(input);

  expect(result).toBe("Entered empty string or nothing");
});
