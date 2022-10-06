const generateBoundaryTest = require("./generate-boundary-test");
const calculateStudentResult = require("./calculate-student-result");

// Boundary Value Analysis
generateBoundaryTest(test);

// Equivalent Class Partitioning

// Extra Test
test("Math: -0.5, Literature: 10, English: 10 => Invalid", () => {
  expect(calculateStudentResult(-0.5, 10, 10)).toBe("Invalid");
});

test("Math: 1, Literature: 1, English: 1 => Fail", () => {
  expect(calculateStudentResult(1, 1, 1)).toBe("Fail");
});

test("Math: 0.5, Literature: 10, English: 10 => Fail", () => {
  expect(calculateStudentResult(0.5, 10, 10)).toBe("Fail");
});

test("Math: 8, Literature: 0, English: 0 => Fail", () => {
  expect(calculateStudentResult(8, 0, 0)).toBe("Fail");
});

test("Math: 10, Literature: 8, English: 10 => Scholar", () => {
  expect(calculateStudentResult(10, 8, 10)).toBe("Scholar");
});

test("Math: 10, Literature: 10, English: 9 => Scholar", () => {
  expect(calculateStudentResult(10, 10, 9)).toBe("Scholar");
});

test("Math: 10, Literature: 10, English: 10 => Scholar", () => {
  expect(calculateStudentResult(10, 10, 10)).toBe("Scholar");
});

test("Math: 9, Literature: 9, English: 9 => Excellent", () => {
  expect(calculateStudentResult(9, 9, 9)).toBe("Excellent");
});

test("Math: 8, Literature: 9, English: 8 => Excellent", () => {
  expect(calculateStudentResult(8, 9, 8)).toBe("Excellent");
});

test("Math: 7, Literature: 7, English: 7 => Very Good", () => {
  expect(calculateStudentResult(7, 7, 7)).toBe("Very Good");
});

test("Math: 6, Literature: 6, English: 6 => Good", () => {
  expect(calculateStudentResult(6, 6, 6)).toBe("Good");
});

test("Math: 4, Literature: 4, English: 4 => OK", () => {
  expect(calculateStudentResult(4, 4, 4)).toBe("OK");
});
