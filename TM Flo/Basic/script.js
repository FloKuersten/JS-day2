/* Basic 1 Exe */
let tempNow = (Math.random()*31) - 5
console-console.log(tempNow);

if ( 11 <= tempNow ) {
    document.write("Today it is hot outside.")
} else {
        document.write("Today it is cold outside.")
    }

/* Basic 2 Exe */
let foods = ["pizza", "burger", "ice cream" , "chocolate"];
let randomFoods = Math.floor(Math.random() * 3);
console.log(foods[randomFoods]);

/* Basic 3 Exe */
function crystalGazer(children, partner, location, job) {
    return  `The person has ${children} children, their partners name is: ${partner} the person works as ${job} in ${location}`;
}
console.log(crystalGazer(2, "Jim", "Austria", "Mechanic"));

/* Basic 4-5 Exe */

function ageCalculator(birth) {
    return `You are either ${new Date().getFullYear() - birth} or ${new Date().getFullYear() - birth + 1}`;
} 
console.log(ageCalculator(1997));

/* Basic 6 Exe */

function radianConverter(degrees) {
    return degrees*Math.PI/180;

}
console.log(radianConverter(90));
console.log(Math.PI);

/* Basic 7 Exe */

let width = 2
let hieght = 2
let depth = 7

function boxArea(width, height) {
    return width*height;

}
function volumeArea(width, height, depth) {
    return boxArea()*depth;
}
console.log(boxArea(2,2));
console.log(volumeArea(7));