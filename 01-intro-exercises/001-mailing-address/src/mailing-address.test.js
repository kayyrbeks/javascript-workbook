import { expect, it } from "vitest";
import mailingAddress from "./mailing-address";

it("should display Kayyrbek's full name and complete mailing address", () => {
  // Arrange
  const expectedResult = "Kayyrbek Perdebekov\nkayyrbeks@gmail.com";
  // Act
  const result = mailingAddress();
  // Assert
  expect(result).toBe(expectedResult);
});
