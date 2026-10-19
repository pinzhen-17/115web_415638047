"use strict";
const studentName = "請填入姓名";
const chinese = 80;
const english = 75;
const programming = 90;
function calculateAverage(first, second, third) {
    return (first + second + third) / 3;
}
const average = calculateAverage(chinese, english, programming);
console.log(`姓名：${studentName}`);
console.log(`平均分數：${average}`);
if (average >= 60) {
    console.log("結果：及格");
}
else {
    console.log("結果：不及格");
}
