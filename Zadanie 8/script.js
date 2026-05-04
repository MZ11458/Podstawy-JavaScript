// Przygotowano system ocen studenta; rozszerzenie wlasne to klasyfikacja sredniej, a najwieksza trudnosc sprawilo zamkniecie calej logiki w funkcji zwracajacej obiekt.
const grades = [3.0, 4.0, 5.0, 3.5, 4.5];
const passingGrade = 3.0;

function summarizeGrades(studentGrades) {
  const gradesSum = studentGrades.reduce((sum, grade) => sum + grade, 0);
  const averageGrade = gradesSum / studentGrades.length;
  const passed = averageGrade >= passingGrade;
  const status = passed ? "zaliczone" : "niezaliczone";
  const classification = averageGrade >= 4.5 ? "bardzo dobry" : averageGrade >= 3.5 ? "dobry" : "dostateczny";

  return {
    average: averageGrade,
    status,
    classification,
  };
}

const finalResult = summarizeGrades(grades);

console.log(`Srednia ocen: ${finalResult.average.toFixed(2)}`);
console.log(`Status zaliczenia: ${finalResult.status}`);
console.log(`Klasyfikacja wyniku: ${finalResult.classification}`);
