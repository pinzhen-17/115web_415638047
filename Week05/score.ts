const studentName: string = "請填入姓名";
const chinese: number = 80;
const english: number = 75;
const programming: number = 90;

function calculateAverage(
  first: number,
  second: number,
  third: number
): number {
  return (first + second + third) / 3;
}

const average: number = calculateAverage(
  chinese,
  english,
  programming
);

console.log(`姓名：${studentName}`);
console.log(`平均分數：${average}`);

if (average >= 60) {
  console.log("結果：及格");
} else {
  console.log("結果：不及格");
}