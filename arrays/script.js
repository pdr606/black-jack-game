

// let featuredPost = ["Check out my Netflix clone", "Here's the code for my project",  "I've just relaunched my portifolio"]

// // let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Nortstat"]


// // console.log(experience[1])
// // console.log(experience[2])
// // console.log(experience[0])

// console.log(featuredPost.length)

// let pdr = ["Pedro", 21, true]

// let cards = [7, 4]

// cards.push(6)

// console.log(cards)

// let message = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good, Been working on my portfolio lately."
// ]


// // LOOPS //

// // START       FINISH       STEEP SIZE //
// // for ( let count = 10; count < 21; count += 1){
// //     console.log(count)
// // }

// for ( let c = 0; c < 101; c += 10){
//     console.log(c)
// }



// let newMessage = "Same here!"
// message.push(newMessage)

// message.pop()
// console.log(message)

// for ( i in )

//  let message = [
//      "Hey, how's it going?",
//      "I'm great, thank you! How about you?",
//      "All good, Been working on my portfolio lately.",
//      "Same here!",
//      "Great to hear"
//  ]

//  for ( i in message){
//     console.log(message[i])
//  }


// let cards = [7, 3, 9]

// for (let i = 0; i < cards.length; i += 1){
//     console.log(cards[i])
// }

// let sentence = ["Hello",
// "my",
// "name",
// "is",
// "Pedro"]

// let greetingEl = document.getElementById("greeting-el")

// for (i in sentence){
//     greetingEl.textContent += `${sentence[i]} `
// }

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime(){
//     if (player1Time < player2Time){
//         return player1Time
//     } else if (player2Time < player1Time){
//         return player2Time
//     } else{
//         return player1Time
//     }

// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// function getTotalTime(){
//     return player1Time + player2Time
// }

// let totalTime = getTotalTime()

// console.log(totalTime)

/* What dows Math.random() do?

You answer:

*/

// let randomNumber = Math.random() * 6

// console.log(randomNumber)

// let flooredNumber = Math.floor(3.6)

// console.log(flooredNumber)




// console.log(randomNumber)

// function rollDice(){
//     let randomNumber = Math.floor (Math.random() * 6) + 1
//     return randomNumber
// }


// let hasSolvedChallenge = true
// let hasHintsLeft = true

// if (hasHintsLeft == true && hasSolvedChallenge == true){
//     showSolution()
// }   else{
//     console.log('Not showing the solution')
// }

// function showSolution(){
//     console.log("Showing the solution...")
// }


// let likesDocumentaries = true
// let likesStartups = true

// if( likesDocumentaries == false || likesStartups == false){
//     recommendMovie()
// }

// function recommendMovie(){
//     console.log("Hey, check out this new film we think you will like")

// }



let castle = {
    local: 'Castelo em Kilcolgan',
    price: 2857,
    avalation: 'god',
    disponible: 'true',
    images: ["img/castle1.png", "img/castle2.png"]
}


console.log(castle.price)
console.log(castle.avalation)
