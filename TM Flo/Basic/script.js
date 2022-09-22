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

/* Basic 4 Exe */
