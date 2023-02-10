

// let keys ={
//     namee:'Pedro',
//     age: 22,
//     country: 'Brazil'
// }

// function logData(){
//     console.log(`${keys.namee} is ${keys.age} years old and lives in ${keys.country}`)

// }

// logData()


// function passage(){
//     let age = 5
//     if (age < 6){
//         console.log('free pass')
//     } else if ( age >= 6 && age <= 17){
//         console.log('child discount')
//     } else if ( age >= 18 && age <= 26){
//         console.log('student discount')
//     } else if ( age >= 27 && age < 66){
//         console.log('full price')
//     } else{
//         console.log('senior citizen discount')
//     }
// }


// passage()


// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

// for (i in largeCountries){
//     console.log(largeCountries[i]) // my resolution
// }

// for(let i = 0; i < largeCountries.length; i++){ // another resolution
//     console.log(largeCountries[i])
// }

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia","Monaco"]

// console.log(largeCountries)

// largeCountries.pop()
// largeCountries.shift()

// console.log(largeCountries)

// largeCountries.unshift("China")
// largeCountries.push("Pakistan")

// console.log(largeCountries)

// let dayOfMonth = 31
// let weekday = "Friday"

// if(dayOfMonth === 31 && weekday === "Friday"){
//     console.log("Michael myres behind you")
// } else{
//     console.log("You have a look!!!")
// }

// let hands = ["rock", "paper", "scissor"]


// function randomHands(){
//     let sort = (Math.floor(Math.random() * 3))
//     console.log(hands[sort])
// }

// randomHands()

let fruit = ["🍎", "🍊","🍎", "🍎", "🍊"]
let apples = []
let orange = []
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")



function divFruts(){


for (i in fruit){
    if( fruit[i] === "🍎"){
        apples.push(fruit[i])
        appleShelf.textContent += fruit[i]
    } else{
        orange.push(fruit[i])
        orangeShelf.textContent += fruit[i]
    }
}

if ( i in apples){
    console.log(apples[i])
}



}

divFruts()
console.log(apples)
console.log(orange)

