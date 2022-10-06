/* Exercise 1 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  console.log(capitalizeFirstLetter("i am a web developer"));


/* Exercise 2 */
let logSum = function sumGrade(math, physics, english) {
    return logSum2(math + physics + english);
}
console.log(sumGrade(3,4,5));

logSum = function avgGrade() {
    return logSum/3;
}
console.log(avgGrade());