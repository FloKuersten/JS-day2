/* Weatherfunction */

function temperature (){
    var temp = Math.floor(Math.random()*31)-5;
    if(temp < 10){
        console.log(temp)
        console.log("The weather is cold")
    }
    else{
        console.log(temp)
        console.log("The weather is moderate")
    }
}


/* random food */

var favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"]
var randomN = Math.floor(Math.random()*3)

function randomFood (){
    var randomN = Math.floor(Math.random()*3)
    console.log(favoriteFoods[randomN]);
}


/* Crystal Gazer */

var numberChildren = 5
var partnerName = "Maria"
var geolocation = "New York"
var job = "Stuntman"


function crystalGazer(){
    document.getElementById("text").innerText= `You will be a ${job} in ${geolocation} and married to ${partnerName} with ${numberChildren} Children.`
}

/* Flo´s Approach */
/* function crystalGazer(children, partner, location, job) {
    return  `The person has ${children} children, their partners name is: ${partner} the person works as ${job} in ${location}`;
}

console.log(crystalGazer(5, "Maria", "New York", "Stuntman")); */

/* Age Calculator */

var birthYear = 1980
var currentYear = new Date().getFullYear()


function ageCalculator(){
    var guess1 = currentYear - birthYear
    console.log(guess1)
    var guess2 = currentYear - birthYear +1
    console.log(guess2)
}

/* Degree Radian Conversion */

const pi = Math.PI
var degreeInput = 90

function conversion(){
    console.log(degreeInput * (pi/180))
}

/* Area and Volume of Box */
/* 
var inputHeight = 20
var inputWidth = 40
var inputDepth = 50 */

function areaVolume(inputWidth, inputHeight, inputDepth){
    var result = inputWidth * inputHeight
    var result2 = inputWidth * inputHeight * inputDepth
    return `Area is ${result} and the Volume is ${result2}`
}

console.log(areaVolume(20, 20, 40))

/* Capitalize */

var randomString = "u like pizza dont you ?"


var correctedString = (function(){
    return `String corrected : ${randomString.charAt().toUpperCase() + randomString.slice(1)}`
})();


console.log(correctedString)


/* Average Grade */

var math = 3
var physics = 4 
var english = 5

function averageGrade(){
   console.log((math + english + physics) /3)
};

/* Global Variable Test for ATM */
let globalvariable = 9

function changevariable(){
    globalvariable = 9
};
changevariable();

console.log(globalvariable)