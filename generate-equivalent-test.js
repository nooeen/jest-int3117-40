const calculateStudentResult = require("./calculate-student-result");

function generateEquivalentTest(test) {
  test("10, 8, 10, Scholar", () => {
    expect(calculateStudentResult(10, 8, 10)).toBe("Scholar");
  });

  test("10, 10, 9, Scholar", () => {
    expect(calculateStudentResult(10, 10, 9)).toBe("Scholar");
  });

  test("10, 10, 10, Scholar", () => {
    expect(calculateStudentResult(10, 10, 10)).toBe("Scholar");
  });

  test("9, 9, 9, Excellent", () => {
    expect(calculateStudentResult(9, 9, 9)).toBe("Excellent");
  });

  test("8, 9, 8, Excellent", () => {
    expect(calculateStudentResult(8, 9, 8)).toBe("Excellent");
  });

  test("7, 7, 7, Very Good", () => {
    expect(calculateStudentResult(7, 7, 7)).toBe("Very Good");
  });

  test("6, 6, 6, Good", () => {
    expect(calculateStudentResult(6, 6, 6)).toBe("Good");
  });

  test("4, 4, 4, OK", () => {
    expect(calculateStudentResult(4, 4, 4)).toBe("OK");
  });

  test("1, 1, 1, Fail", () => {
    expect(calculateStudentResult(1, 1, 1)).toBe("Fail");
  });

  test("0.5, 10, 10, Fail", () => {
    expect(calculateStudentResult(0.5, 10, 10)).toBe("Fail");
  });

  test("8, 0, 0, Failed", () => {
    expect(calculateStudentResult(8, 0, 0)).toBe("Fail");
  });

  test("-0.5, 10, 10, Invalid", () => {
    expect(calculateStudentResult(-0.5, 10, 10)).toBe("Invalid");
  });
}

module.exports = generateEquivalentTest;
