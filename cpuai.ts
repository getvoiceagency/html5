
//Base Binary Value 50/50
let BinBase = 50
//Set Difficulty Modifier
let easy = 10
let medium = 20
let hard =40
let outPut = "over"


// Set Card Variables
let star = 1
let heart = 8
let defence = 3
let blue = 6
let orange =1
let green =4

//Create the beat Me score
let beatMe = BinBase+hard 

//Roll a D100
let diceRoll = Math.floor(Math.random() * 100) + 1  

//If diceRoll is less than beat me Success
if (diceRoll < beatMe )

{
    
// Find which stat is greatest and store it
let resultPower = Math.max(star,heart,defence)
let resultTwist = Math.max(blue,orange,green)

//Find which power was the greater and add it's value to emPower
if 
(star = resultPower )
{
    let emPower = resultPower
   console.log(( {emPower} ) );
}

else if
(heart = resultPower) {
    let emPower = resultPower
   console.log(( {emPower} ) );
}    

else if 
(defence = resultPower) {
    let emPower = resultPower
    console.log(( {emPower} ) );
}    
//Find which twist was the greater and add it's value to emTwist
if 
(star = resultTwist )
{
    let emTwist = resultTwist
   console.log(( {emTwist} ) );
}

else if
(heart = resultTwist) {
    let emTwist = resultTwist
   console.log(( {emTwist} ) );
}    

else if 
(defence = resultTwist) {
    let emTwist = resultTwist
    console.log(( {emTwist} ) );
}


//Console 
console.log(( {resultPower} ) );
console.log(( {resultTwist} ) );
console.log(( {beatMe} ) );
}

//Else do a different check
else if (diceRoll > beatMe)

{
// Find which stat is greatest and store it
let resultPower = Math.max(star,heart,defence)
let resultTwist = Math.max(blue,orange,green)

//Find which power was the greater and add it's value to emPower
if 
(star = resultPower )
{
    let emPower = resultPower
   console.log(( {emPower} ) );
}

else if
(heart = resultPower) {
    let emPower = resultPower
   console.log(( {emPower} ) );
}    

else if 
(defence = resultPower) {
    let emPower = resultPower
    console.log(( {emPower} ) );
}    
//Find which twist was the greater and add it's value to emTwist
if 
(star = resultTwist )
{
    let emTwist = resultTwist
   console.log(( {emTwist} ) );
}

else if
(heart = resultTwist) {
    let emTwist = resultTwist
   console.log(( {emTwist} ) );
}    

else if 
(defence = resultTwist) {
    let emTwist = resultTwist
    console.log(( {emTwist} ) );
}


//Console
console.log(( {resultPower} ) );
console.log(( {resultTwist} ) );
console.log(( {beatMe} ) );
console.log(( {outPut} ) );
}



