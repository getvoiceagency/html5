//Player Card Stats
let plStar = 22
let plHeart = 5
let plDefence = 4
let plBlue = 1
let plOrange = 3
let plGreen = 5
let plHealth = 10
let plTwistColour = "green"


// Ai 
//Base Binary Value 50/50
let BinBase = 50
//Set Difficulty Modifier
let easy = 10
let medium = 20
let hard = 40
let outPut = 0

//CPU card stats
let emStar = 8
let emHeart = 6
let emDefence = 5
let emBlue = 3
let emOrange = 4
let emGreen = 6
let emHealth = 10
let emTwistColour = "green"

let plPower = 0
let plTwist = 0
let emPower = 0
let emTwist = 0
let plBonus = 0
let emBonus = 0
let winner = 0

//Damage Mechanics
let dmgModel = 0

let plResultPower = Math.max(plStar,plHeart,plDefence)
let plResultTwist = Math.max(plBlue,plOrange,plGreen)

let emResultPower = Math.max(emStar,emHeart,emDefence)
let emResultTwist = Math.max(emBlue,emOrange,emGreen)

//Create the beat Me score
let beatMe = BinBase+easy

//Roll a D100
let diceRoll = Math.floor(Math.random() * 100) + 1  

//If diceRoll is less than beat me Success CPU Is smart
{
if 
(plStar = plResultPower )
{
    plPower = plResultPower
   console.log(( {plPower} ) );
}

else if
(plHeart = plResultPower) {
    plPower = plResultPower
   console.log(( {plPower} ) );
}    

else if 
(plDefence = plResultPower) {
    plPower = plResultPower
    console.log(( {plPower} ) );
}    
//Find which twist was the greater and add it's value to emTwist
if 
(plBlue = plResultTwist )
{
    plTwist = plResultTwist
   console.log(( {plTwist} ) );
}

else if
(plOrange = plResultTwist) {
    plTwist = plResultTwist
   console.log(( {plTwist} ) );
}    

else if 
(plGreen = plResultTwist) {
    plTwist = plResultTwist
    console.log(( {plTwist} ) );
}

if (diceRoll < beatMe ){
// CPU chooses

if 
(emStar = emResultPower )
{
    emPower = emResultPower
   console.log(( {emPower} ) );
}

else if
(emHeart = emResultPower) {
    emPower = emResultPower
   console.log(( {emPower} ) );
}    

else if 
(emDefence = emResultPower) {
    emPower = emResultPower
    console.log(( {emPower} ) );
}    
//Find which twist was the greater and add it's value to emTwist
if 
(emBlue = emResultTwist )
{
    emTwist = emResultTwist
   console.log(( {emTwist} ) );
}

else if
(plOrange = emResultTwist) {
    emTwist = emResultTwist
   console.log(( {emTwist} ) );
}    

else if 
(emGreen = emResultTwist) {
    emTwist = emResultTwist
    console.log(( {emTwist} ) );
}

}

// if the beat me is failed
else if (diceRoll > beatMe )
{
// CPU chooses
let emResultPower = Math.min(emStar,emHeart,emDefence)
let emResultTwist = Math.min(emBlue,emOrange,emGreen)
if 
(emStar = emResultPower )
{
    emPower = emResultPower
   console.log(( {emPower} ) );
}

else if
(emHeart = emResultPower) {
    emPower = emResultPower
   console.log(( {emPower} ) );
}    

else if 
(emDefence = emResultPower) {
    emPower = emResultPower
    console.log(( {emPower} ) );
}    
//Find which twist was the greater and add it's value to emTwist
if 
(emBlue = emResultTwist )
{
    emTwist = emResultTwist
   console.log(( {emTwist} ) );
}

else if
(plOrange = emResultTwist) {
    emTwist = emResultTwist
   console.log(( {emTwist} ) );
}    

else if 
(emGreen = emResultTwist) {
    emTwist = emResultTwist
    console.log(( {emTwist} ) );
}

//show me show me... lovely stats

console.log(( "roll failed" ) );    
}


//check for colours and add bonus to attack via plBonus
if (plTwistColour = "green", emTwistColour = "green")
{   plBonus = 2
    emBonus = 1
   console.log(( {emBonus} ) );
}

else if
(plTwistColour = "green", emTwistColour = "orange") {
    plBonus = 2
    emBonus = 1
   console.log(( {emTwist} ) );
}    

else if 
(plTwistColour = "green", emTwistColour = "blue") {
    plBonus = 2
    emBonus = 1
    console.log(( {emTwist} ) );
}
else if
(plTwistColour = "blue", emTwistColour = "blue") {
    plBonus = 2
    emBonus = 1
    console.log(( {emTwist} ) );
}    

else if 
(plTwistColour = "blue", emTwistColour = "orange") {
    plBonus = 2
    emBonus = 1
    console.log(( {emTwist} ) );
}
else if
(plTwistColour = "blue", emTwistColour = "green") {
    plBonus = 2
    emBonus = 1
   console.log(( {emTwist} ) );
}    

else if 
(plTwistColour = "orange", emTwistColour = "orange") {
    plBonus = 2
    emBonus = 1
    console.log(( {emTwist} ) );
}
else if
(plTwistColour = "orange", emTwistColour = "blue") {
    plBonus = 2
    emBonus = 1
   console.log(( {emTwist} ) );
}    

else if 
(plTwistColour = "orange", emTwistColour = "green") {
    plBonus = 2
    emBonus = 1
    console.log(( {emTwist} ) );
}


// calculate based on card stats how much damage is done.

// calculate Attack Power
    let plAttack = plPower + plTwist + plBonus
    let emAttack = emPower + emTwist + emBonus

// Who has the highest attack power
    if (plAttack > emAttack){
    dmgModel = plAttack - emDefence
    emHeart = emHeart - dmgModel
//if the card looses all health do 1dmg to cpu
    if (emHeart < 1){
    emHealth = emHealth - 1
    
    //sucky solution want booleen
    winner = 1
    }
// check cpu health for negative
     if (emHealth < 0) {
        emHealth = 0
        
}
    console.log(( "Player won" ) );
}
    else if (emAttack > plAttack){
    dmgModel = emAttack - plDefence
     plHeart =plHeart - dmgModel
    if (plHeart < 1){
    plHealth = plHealth - 1
}
    if (plHealth < 0) {
        plHealth = 0
        winner = 2
        
}
    console.log(( "CPU Won" ) );
    
}
    else if (plAttack = emAttack){
    console.log(( "Draw" ) );
}

//show me show me... lovely stats
console.log(( {plHealth} ) );
console.log(( {emHealth} ) );
console.log(( {plAttack} ) );
console.log(( {emAttack} ) );
console.log(( {dmgModel} ) );
console.log(( {plHeart} ) );
console.log(( {emHeart} ) );


}


//Console 
    

