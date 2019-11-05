"use strict";
// Set Card Variables
var star = 1;
var heart = 8;
var defence = 3;
var blue = 6;
var orange = 1;
var green = 4;
//If diceRoll is less than beat me Success
if (diceRoll < beatMe) {
    // Find which stat is greatest and store it
    var resultPower = Math.max(star, heart, defence);
    var resultTwist = Math.max(blue, orange, green);
    //Find which power was the greater and add it's value to emPower
    if (star = resultPower) {
        var emPower_1 = resultPower;
        console.log(({ emPower: emPower_1 }));
    }
    else if (heart = resultPower) {
        var emPower_2 = resultPower;
        console.log(({ emPower: emPower_2 }));
    }
    else if (defence = resultPower) {
        var emPower_3 = resultPower;
        console.log(({ emPower: emPower_3 }));
    }
    //Find which twist was the greater and add it's value to emTwist
    if (star = resultTwist) {
        var emTwist_1 = resultTwist;
        console.log(({ emTwist: emTwist_1 }));
    }
    else if (heart = resultTwist) {
        var emTwist_2 = resultTwist;
        console.log(({ emTwist: emTwist_2 }));
    }
    else if (defence = resultTwist) {
        var emTwist_3 = resultTwist;
        console.log(({ emTwist: emTwist_3 }));
    }
    //Console 
    console.log(({ resultPower: resultPower }));
    console.log(({ resultTwist: resultTwist }));
    console.log(({ beatMe: beatMe }));
}
//Else do a different check
else if (diceRoll > beatMe) {
    // Find which stat is greatest and store it
    var resultPower = Math.max(star, heart, defence);
    var resultTwist = Math.max(blue, orange, green);
    //Find which power was the greater and add it's value to emPower
    if (star = resultPower) {
        var emPower_4 = resultPower;
        console.log(({ emPower: emPower_4 }));
    }
    else if (heart = resultPower) {
        var emPower_5 = resultPower;
        console.log(({ emPower: emPower_5 }));
    }
    else if (defence = resultPower) {
        var emPower_6 = resultPower;
        console.log(({ emPower: emPower_6 }));
    }
    //Find which twist was the greater and add it's value to emTwist
    if (star = resultTwist) {
        var emTwist_4 = resultTwist;
        console.log(({ emTwist: emTwist_4 }));
    }
    else if (heart = resultTwist) {
        var emTwist_5 = resultTwist;
        console.log(({ emTwist: emTwist_5 }));
    }
    else if (defence = resultTwist) {
        var emTwist_6 = resultTwist;
        console.log(({ emTwist: emTwist_6 }));
    }
    //Console
    console.log(({ resultPower: resultPower }));
    console.log(({ resultTwist: resultTwist }));
    console.log(({ beatMe: beatMe }));
    console.log(({ outPut: outPut }));
}
