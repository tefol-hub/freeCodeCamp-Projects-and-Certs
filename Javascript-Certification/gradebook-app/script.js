function getAverage(scores) {
  if (
    !Array.isArray(scores) ||
    scores.length <= 0
  ) {
    throw new Error("Argument should be a non-empty array!");
  }

  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

  const average = total / scores.length;

  return average;
}


function getGrade(score) {
  if (
    !Number.isInteger(score) ||
    score < 0 ||
    score > 100
  ) {
    throw new Error("Argument should be a number that is not less than 0 or greater than 100!");
  }

  const grade = score === 100 ? "A+"
    : score >= 90 ? "A"
    : score >= 80 ? "B"
    : score >= 70 ? "C"
    : score >= 60 ? "D"
    : "F";

  return grade;
}


function hasPassingGrade(score) {
  if (
    !Number.isInteger(score) ||
    score < 0 ||
    score > 100
  ) {
    throw new Error("Argument should be a number that is not less than 0 or greater than 100!");
  }

  const grade = getGrade(score);

  if (grade === "F") {
    return false;
  }

  return true; 
}


function studentMsg(scores, score) {
   if (
    !Array.isArray(scores) ||
    scores.length <= 0
  ) {
    throw new Error("Argument should be a non-empty array!");
  }
  if (
    !Number.isInteger(score) ||
    score < 0 ||
    score > 100
  ) {
    throw new Error("Argument should be a number that is not less than 0 or greater than 100!");
  }

  const averageScore = getAverage(scores);
  const studentGrade = getGrade(score);
  const hasPassed = hasPassingGrade(score);

  const msg = hasPassed ? `Class average: ${averageScore}. Your grade: ${studentGrade}. You passed the course.`
  : `Class average: ${averageScore}. Your grade: ${studentGrade}. You failed the course.`;

  return msg;
}

console.log(getAverage([10, 20, 30, 40, 50, 60, 70, 97])); // 47.125
console.log(getGrade(75)); // C
console.log(hasPassingGrade(60)); // true
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37)); // Class average: 71.7. Your grade: F. You failed the course.
