/* Exercise 1 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  console.log(capitalizeFirstLetter("i am a web developer"));


/* Exercise 2 */
function sumGrade(math, physics, english) {
    return math + physics + english;
}

var logSum = console.log(sumGrade(3,4,5));

function avgGrade(logsSum) {
    return logSum/3;
}
console.log(avgGrade(logSum));