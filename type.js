"use strict";
//Base Binary Value 50/50
var BinBase = 50;
//Set Difficulty Modifier
var easy = 45;
var medium = 35;
var hard = 25;
var outPut = "over";
// Set Card Variables
var star = 1;
var heart = 8;
var defence = 3;
var blue = 6;
var orange = 1;
var green = 4;
//Create the beat Me score
var beatMe = BinBase + hard;
//Roll a D100
var diceRoll = Math.floor(Math.random() * 100) + 1;
//If diceRoll is less than beat me Success
if (diceRoll < beatMe) {
    // Find which stat is greatest and store it
    var resultPower = Math.max(star, heart, defence);
    var resultTwist = Math.max(blue, orange, green);
    //Find which power was the greater and add it's value to emPower
    if (star = resultPower) {
        var emPower = resultPower;
        console.log(({ emPower: emPower }));
    }
    else if (heart = resultPower) {
        var emPower = resultPower;
        console.log(({ emPower: emPower }));
    }
    else if (defence = resultPower) {
        var emPower = resultPower;
        console.log(({ emPower: emPower }));
    }
    //Find which twist was the greater and add it's value to emTwist
    if (star = resultTwist) {
        var emTwist = resultTwist;
        console.log(({ emTwist: emTwist }));
    }
    else if (heart = resultTwist) {
        var emTwist = resultTwist;
        console.log(({ emTwist: emTwist }));
    }
    else if (defence = resultTwist) {
        var emTwist = resultTwist;
        console.log(({ emTwist: emTwist }));
    }
    //Console and do Next
    console.log(({ resultPower: resultPower }));
    console.log(({ resultTwist: resultTwist }));
    console.log(({ beatMe: beatMe }));
}
else if (diceRoll > beatMe) {
    // Find which stat is greatest and store it
    var resultPower = Math.max(star, heart, defence);
    var resultTwist = Math.max(blue, orange, green);
    //Find which power was the greater and add it's value to emPower
    if (star = resultPower) {
        var emPower = resultPower;
        console.log(({ emPower: emPower }));
    }
    else if (heart = resultPower) {
        var emPower = resultPower;
        console.log(({ emPower: emPower }));
    }
    else if (defence = resultPower) {
        var emPower = resultPower;
        console.log(({ emPower: emPower }));
    }
    //Find which twist was the greater and add it's value to emTwist
    if (star = resultTwist) {
        var emTwist = resultTwist;
        console.log(({ emTwist: emTwist }));
    }
    else if (heart = resultTwist) {
        var emTwist = resultTwist;
        console.log(({ emTwist: emTwist }));
    }
    else if (defence = resultTwist) {
        var emTwist = resultTwist;
        console.log(({ emTwist: emTwist }));
    }
    //Console and do Next
    console.log(({ resultPower: resultPower }));
    console.log(({ resultTwist: resultTwist }));
    console.log(({ beatMe: beatMe }));
    console.log(({ outPut: outPut }));
}
