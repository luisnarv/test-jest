const FizzBuzz = require("./Fizzbuzz");
describe("FizzBuzz", () => {
  test("Should print and error message if the argument is not a number", () => {
    const expected = "Error: the argument must be a nuumber";
    const result = FizzBuzz("15");
    expect(expected).toBe(result);
  });

  test("Should print 1  if they  receive 1", () => {
    const expected = 1;
    const result = FizzBuzz(1);
    expect(expected).toBe(result);
  });

  test("Should print Fizz  if they  receive 3", () => {
    const expected = "Fizz";
    const result = FizzBuzz(3);
    expect(expected).toBe(result);
  });

  test("Should print Fizz if they receive multiple of 3", () => {
    const expected = "Fizz";
    const result = FizzBuzz(6);
    expect(expected).toBe(result);
  });

  test("Should print Buzz if they receive 5", () => {
    const expected = "Buzz";
    const result = FizzBuzz(5);
    expect(expected).toBe(result);
  });

  test("should print Buzz if they receive multiple of 5", () => {
    const expected = "Buzz";
    const result = FizzBuzz(10);
    expect(expected).toBe(result);
  });

  test("Should print FizzBuzz if they recive multiple of 3 AND 5", () => {
    const expeted = "FizzBuzz";
    const result = FizzBuzz(15);
    expect(expeted).toBe(result);
  });
});
