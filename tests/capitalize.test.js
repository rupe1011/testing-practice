const capitalize = require("../src/capitalize");

test("capitalizes the first character", () => {
    expect(capitalize("hello")).toBe("Hello");
});

const reverseString = require("../src/reverseString");

test("reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
});

test("reverses a single character", () => {
    expect(reverseString("a")).toBe("a");
});

test("handles an empty string", () => {
    expect(reverseString("")).toBe("");
});

const calculator = require("../src/calculator");

test("adds two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test("subtracts two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test("divides two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test("multiplies two numbers", () => {
    expect(calculator.multiply(4, 3)).toBe(12);
});