
// let firstCard = 10
// let secondeCard = 14

// let sum = firstCard + secondeCard

// if( sum < 21){
//     console.log("Do you want to draw a new card?")
// } else if (sum === 21){
//     console.log("Wohoo! You've got Blacjack!")
// } else {
//     console.log("You're out of the game! ")
// }

// let age = 21

// if (age < 21){
//     console.log("You can not enter the club")
// } else{
//     console.log("Welcome!")
// }

// let age = 99

// if (age < 100){
//     console.log("Not elegible")
// }   else if( age === 100){
//     console.log("Here is your birthday card from the King")
// } else{
//     console.log("Not eligible, you have already gooten one")
// }


// let firstCard = 10
// let secondCard = 7
// let hasBlackJack = false
// let isAlive = true

// let sum = firstCard + secondCard

// if ( sum <= 20){
//     console.log("Do you want to drawn a new card?")
//     isAlive = true

// }   else if ( sum === 21){
//     console.log("Wohoo! You've got Blackjack!")
//     hasBlackJack = true
// } else{
//     console.log("You're out of the game!")
//     let isAlive = false
// }

// console.log(4 === 3) // false
// console.log(5 > 2) // true
// console.log(12 > 12) // false
// console.log(3 < 0) // false
// console.log(3 >= 3) // true
// console.log(11 <= 11) // true
// console.log(3 <= 2) // fals let firstCard = 10


let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let cards = []
let hasBlackJack = false
let isAlive = false
let sum = 0
let message = ""


let pointsEl = document.getElementById("points-el")
pointsvalue = 0


function namepeople(){
    let nameEl = document.getElementById('name-el')
    let playerEl = document.getElementById('player-el')

    playerEl.textContent = `Player: ${nameEl.value} / Points:`
}


function getRandomCard(){


     let randomNumber = Math.floor ( Math.random() *13 ) + 1
     if (randomNumber > 10){
        return 10
     } else if ( randomNumber === 1){
        return 11
     } else{
        return randomNumber
     }

}   

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    if ( sum <= 20){
        message = "Do you want to drawn a new card?"
        isAlive = true

    }   else if ( sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
        pointsvalue += 10
        pointsEl.textContent = pointsvalue
        if (hasBlackJack == true){
            hasBlackJack = false
        }
    } else{
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = `Sum: ${sum}`
    cardsEl.textContent = "Cards: "
    for (i in cards){
        cardsEl.textContent += `${cards[i]} `
    }


}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()   
    }
    
    
}

