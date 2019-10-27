"use strict";
//Player Card Stats
var plStar = 6;
var plHeart = 5;
var plDefence = 4;
var plBlue = 1;
var plOrange = 3;
var plGreen = 5;
var plHealth = 10;
var plTwistColour = "green";
//CPU card stats
var emStar = 8;
var emHeart = 6;
var emDefence = 5;
var emBlue = 3;
var emOrange = 4;
var emGreen = 6;
var emHealth = 10;
var emTwistColour = "green";
var plPower = 0;
var plTwist = 0;
var emPower = 0;
var emTwist = 0;
var plBonus = 0;
var emBonus = 0;
//Damage Mechanics
var dmgModel = 0;
var plResultPower = Math.max(plStar, plHeart, plDefence);
var plResultTwist = Math.max(plBlue, plOrange, plGreen);
var emResultPower = Math.max(emStar, emHeart, emDefence);
var emResultTwist = Math.max(emBlue, emOrange, emGreen);
if (plStar = plResultPower) {
    plPower = plResultPower;
    console.log(({ plPower: plPower }));
}
else if (plHeart = plResultPower) {
    plPower = plResultPower;
    console.log(({ plPower: plPower }));
}
else if (plDefence = plResultPower) {
    plPower = plResultPower;
    console.log(({ plPower: plPower }));
}
//Find which twist was the greater and add it's value to emTwist
if (plBlue = plResultTwist) {
    plTwist = plResultTwist;
    console.log(({ plTwist: plTwist }));
}
else if (plOrange = plResultTwist) {
    plTwist = plResultTwist;
    console.log(({ plTwist: plTwist }));
}
else if (plGreen = plResultTwist) {
    plTwist = plResultTwist;
    console.log(({ plTwist: plTwist }));
}
// CPU chooses
if (emStar = emResultPower) {
    emPower = emResultPower;
    console.log(({ emPower: emPower }));
}
else if (emHeart = emResultPower) {
    emPower = emResultPower;
    console.log(({ emPower: emPower }));
}
else if (emDefence = emResultPower) {
    emPower = emResultPower;
    console.log(({ emPower: emPower }));
}
//Find which twist was the greater and add it's value to emTwist
if (emBlue = emResultTwist) {
    emTwist = emResultTwist;
    console.log(({ emTwist: emTwist }));
}
else if (plOrange = emResultTwist) {
    emTwist = emResultTwist;
    console.log(({ emTwist: emTwist }));
}
else if (emGreen = emResultTwist) {
    emTwist = emResultTwist;
    console.log(({ emTwist: emTwist }));
}
//check for colours and add bonus to attack via plBonus
if (plTwistColour = "green", emTwistColour = "green") {
    plBonus = 2;
    emBonus = 1;
    console.log(({ emBonus: emBonus }));
}
else if (plTwistColour = "green", emTwistColour = "orange") {
    plBonus = 2;
    emBonus = 1;
    console.log(({ emTwist: emTwist }));
}
else if (plTwistColour = "green", emTwistColour = "blue") {
    plBonus = 2;
    emBonus = 1;
    console.log(({ emTwist: emTwist }));
}
else if (plTwistColour = "blue", emTwistColour = "blue") {
    plBonus = 2;
    emBonus = 1;
    console.log(({ emTwist: emTwist }));
}
else if (plTwistColour = "blue", emTwistColour = "orange") {
    plBonus = 2;
    emBonus = 1;
    console.log(({ emTwist: emTwist }));
}
else if (plTwistColour = "blue", emTwistColour = "green") {
    plBonus = 2;
    emBonus = 1;
    console.log(({ emTwist: emTwist }));
}
else if (plTwistColour = "orange", emTwistColour = "orange") {
    plBonus = 2;
    emBonus = 1;
    console.log(({ emTwist: emTwist }));
}
else if (plTwistColour = "orange", emTwistColour = "blue") {
    plBonus = 2;
    emBonus = 1;
    console.log(({ emTwist: emTwist }));
}
else if (plTwistColour = "orange", emTwistColour = "green") {
    plBonus = 2;
    emBonus = 1;
    console.log(({ emTwist: emTwist }));
}
// calculate based on card stats how much damage is done.
// calculate Attack Power
var plAttack = plPower + plTwist + plBonus;
var emAttack = emPower + emTwist + emBonus;
// Who has the highest attack power
if (plAttack > emAttack) {
    dmgModel = plAttack - emDefence;
    emHeart = emHeart - dmgModel;
    //if the card looses all health do 1dmg to cpu
    if (emHeart < 1) {
        emHealth = emHealth - 1;
    }
    // check cpu health for negative
    if (emHealth < 0) {
        emHealth = 0;
    }
    console.log(("Player won"));
}
else if (emAttack > plAttack) {
    dmgModel = emAttack - plDefence;
    plHeart = plHeart - dmgModel;
    if (plHeart < 1) {
        plHealth = plHealth - 1;
    }
    if (plHealth < 0) {
        plHealth = 0;
    }
    console.log(("CPU Won"));
}
else if (plAttack = emAttack) {
    console.log(("Draw"));
}
//show me show me... lovely stats
console.log(({ plHealth: plHealth }));
console.log(({ emHealth: emHealth }));
console.log(({ plAttack: plAttack }));
console.log(({ emAttack: emAttack }));
console.log(({ dmgModel: dmgModel }));
console.log(({ plHeart: plHeart }));
console.log(({ emHeart: emHeart }));
//Console 
