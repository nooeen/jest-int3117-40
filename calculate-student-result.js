function calculateStudentResult(math, literature, english) {
  if (
    math > 10 ||
    math < 0 ||
    literature > 10 ||
    literature < 0 ||
    english < 0 ||
    english > 10
  ) {
    return "Invalid";
  } else if (math < 1 || literature < 1 || english < 1) {
    return "Fail";
  } else if (math + literature + english >= 28) {
    return "Scholar";
  } else if (math + literature + english >= 25) {
    return "Excellent";
  } else if (math + literature + english >= 20) {
    return "Very Good";
  } else if (math + literature + english >= 16) {
    return "Good";
  } else if (math + literature + english >= 10) {
    return "OK";
  } else {
    return "Fail";
  }
}

module.exports = calculateStudentResult;
