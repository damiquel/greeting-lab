import { Greeter } from "../src/Greeter";

describe("Greeter class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter = new Greeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
});
