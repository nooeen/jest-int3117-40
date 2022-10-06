const calculateStudentResult = require("./calculate-student-result");

function generateBoundaryTest(test) {
  const values = [-1, 0, 1, 5, 9, 10, 11];

  values.forEach((i) => {
    values.forEach((j) => {
      values.forEach((k) => {
        var expectedResult = "";
        if (i > 10 || i < 0 || j > 10 || j < 0 || k < 0 || k > 10) {
          expectedResult = "Invalid";
        } else if (i < 1 || j < 1 || k < 1) {
          expectedResult = "Fail";
        } else if (i + j + k >= 28) {
          expectedResult = "Scholar";
        } else if (i + j + k >= 25) {
          expectedResult = "Excellent";
        } else if (i + j + k >= 20) {
          expectedResult = "Very Good";
        } else if (i + j + k >= 16) {
          expectedResult = "Good";
        } else if (i + j + k >= 10) {
          expectedResult = "OK";
        } else {
          expectedResult = "Fail";
        }
        test(`${i}, ${j}, ${k}, ${expectedResult}`, () => {
          expect(calculateStudentResult(i, j, k)).toBe(expectedResult);
        });
      });
    });
  });
}

module.exports = generateBoundaryTest;
