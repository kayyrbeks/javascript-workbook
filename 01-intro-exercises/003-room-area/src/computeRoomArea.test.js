import { expect, it } from "vitest";
import computeRoomArea from "./computeRoomArea.js";

it("should compute area of a room if two numerical values is provided", () => {
  const a = 2;
  const b = 3;

  const result = computeRoomArea(a, b);

  const expectedResult = a * b;
  expect(result).toBe(expectedResult);
});

it("should compute area of a room if two numerical string values is provided", () => {
  const a = "2";
  const b = "3";

  const result = computeRoomArea(a, b);

  const expectedResult = +a * +b;
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one invalid value is provided", () => {
  const a = "a";
  const b = 3;
  const c = 2;
  let d;
  const e = 2;
  const f = [3];

  const result1 = computeRoomArea(a, b);
  const result2 = computeRoomArea(c, d);
  const result3 = computeRoomArea(e, f);

  expect(result1).toBeNaN();
  expect(result2).toBeNaN();
  expect(result3).toBeNaN();
});

it("should yield 0 if at least one empty value is provided", () => {
  const a = 2;
  const b = "";

  const result1 = computeRoomArea(a, b);

  expect(result1).toBe(0);
});
