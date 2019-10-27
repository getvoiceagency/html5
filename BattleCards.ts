//Player Card Stats
let plStar = 6
let plHeart = 5
let plDefence = 4
let plBlue = 1
let plOrange = 3
let plGreen = 5
let plHealth = 10
let plTwistColour = "green"


//CPU card stats
let emStar = 8
let emHeart = 6
let emDefence = 5
let emBlue = 3
let emOrange = 4
let emGreen = 6
let emHealth = 10
let emTwistColour = "green"

let plPower = 1
let plTwist = 1
let emPower = 1
let emTwist = 1
let plBonus = 1
let emBonus = 1

//Damage Mechanics
let dmgModel = 0

let plResultPower = Math.max(plStar,plHeart,plDefence)
let plResultTwist = Math.max(plBlue,plOrange,plGreen)

let emResultPower = Math.max(emStar,emHeart,emDefence)
let emResultTwist = Math.max(emBlue,emOrange,emGreen)

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

//check for colours and add bonus to 
if (plTwistColour = "green", emTwistColour = "green")
{   plBonus = 2
    emBonus = 1
   console.log(( {emBonus} ) );
}

else if
(plTwistColour = "green", emTwistColour = "orange") {
    emTwist = emResultTwist
   console.log(( {emTwist} ) );
}    

else if 
(plTwistColour = "green", emTwistColour = "blue") {
    emTwist = emResultTwist
    console.log(( {emTwist} ) );
}
else if
(plTwistColour = "blue", emTwistColour = "blue") {
    emTwist = emResultTwist
   console.log(( {emTwist} ) );
}    

else if 
(plTwistColour = "blue", emTwistColour = "orange") {
    emTwist = emResultTwist
    console.log(( {emTwist} ) );
}
else if
(plTwistColour = "blue", emTwistColour = "green") {
    emTwist = emResultTwist
   console.log(( {emTwist} ) );
}    

else if 
(plTwistColour = "orange", emTwistColour = "orange") {
    emTwist = emResultTwist
    console.log(( {emTwist} ) );
}
else if
(plTwistColour = "orange", emTwistColour = "blue") {
    emTwist = emResultTwist
   console.log(( {emTwist} ) );
}    

else if 
(plTwistColour = "orange", emTwistColour = "green") {
    emTwist = emResultTwist
    console.log(( {emTwist} ) );
}


// calculate Attack Power
let plAttack = plPower + plTwist + plBonus
let emAttack = emPower + emTwist + emBonus

// Who has the highest attack power
if (plAttack > emAttack){
    dmgModel = plAttack - emAttack
    plHealth = plHealth - dmgModel
    console.log(( "Player won" ) );
}
else if (emAttack > plAttack){
 dmgModel = emAttack - plAttack
    emHealth = emHealth - dmgModel
    console.log(( "CPU Won" ) );
}
else if (plAttack = emAttack){
    console.log(( "Draw" ) );
}


console.log(( {plPower} ) );
console.log(( {plTwist} ) );
console.log(( {plAttack} ) );
console.log(( {emAttack} ) );
console.log(( {plHealth} ) );
console.log(( {emHealth} ) );
console.log(( {plAttack} ) );
console.log(( {emAttack} ) );
console.log(( {dmgModel} ) );





//Console 
    

