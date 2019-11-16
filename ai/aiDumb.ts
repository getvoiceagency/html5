// CPU chooses worst result
let emResultPowerMin = Math.min(emStar,emHeart,emDefence)
let emResultTwistMin = Math.min(emBlue,emOrange,emGreen)
if 
(emStar = emResultPowerMin )
{
    emPower = emResultPowerMin
   console.log(( {emPower} ) );
}

else if
(emHeart = emResultPowerMin) {
    emPower = emResultPowerMin
   console.log(( {emPower} ) );
}    

else if 
(emDefence = emResultPowerMin) {
    emPower = emResultPowerMin
    console.log(( {emPower} ) );
}    
//Find which twist was the greater and add it's value to emTwist
if 
(emBlue = emResultTwistMin )
{
    emTwist = emResultTwistMin
   console.log(( {emTwist} ) );
}

else if
(plOrange = emResultTwistMin) {
    emTwist = emResultTwistMin
   console.log(( {emTwist} ) );
}    

else if 
(emGreen = emResultTwistMin) {
    emTwist = emResultTwistMin
    console.log(( {emTwist} ) );
}

console.log(( "CPU Is Dumb" ) );    