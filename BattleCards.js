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
var plPower = 1;
var plTwist = 1;
var emPower = 1;
var emTwist = 1;
var plBonus = 1;
var emBonus = 1;
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
//check for colours and add bonus to 
if (plTwistColour = "green", emTwistColour = "green") {
    plBonus = 2;
    emBonus = 1;
    console.log(({ emBonus: emBonus }));
}
else if (plTwistColour = "green", emTwistColour = "orange") {
    emTwist = emResultTwist;
    console.log(({ emTwist: emTwist }));
}
else if (plTwistColour = "green", emTwistColour = "blue") {
    emTwist = emResultTwist;
    console.log(({ emTwist: emTwist }));
}
else if (plTwistColour = "blue", emTwistColour = "blue") {
    emTwist = emResultTwist;
    console.log(({ emTwist: emTwist }));
}
else if (plTwistColour = "blue", emTwistColour = "orange") {
    emTwist = emResultTwist;
    console.log(({ emTwist: emTwist }));
}
else if (plTwistColour = "blue", emTwistColour = "green") {
    emTwist = emResultTwist;
    console.log(({ emTwist: emTwist }));
}
else if (plTwistColour = "orange", emTwistColour = "orange") {
    emTwist = emResultTwist;
    console.log(({ emTwist: emTwist }));
}
else if (plTwistColour = "orange", emTwistColour = "blue") {
    emTwist = emResultTwist;
    console.log(({ emTwist: emTwist }));
}
else if (plTwistColour = "orange", emTwistColour = "green") {
    emTwist = emResultTwist;
    console.log(({ emTwist: emTwist }));
}
// calculate Attack Power
var plAttack = plPower + plTwist + plBonus;
var emAttack = emPower + emTwist + emBonus;
// Who has the highest attack power
if (plAttack > emAttack) {
    dmgModel = plAttack - emAttack;
    plHealth = plHealth - dmgModel;
    console.log(("Player won"));
}
else if (emAttack > plAttack) {
    dmgModel = emAttack - plAttack;
    emHealth = emHealth - dmgModel;
    console.log(("CPU Won"));
}
else if (plAttack = emAttack) {
    console.log(("Draw"));
}
console.log(({ plPower: plPower }));
console.log(({ plTwist: plTwist }));
console.log(({ plAttack: plAttack }));
console.log(({ emAttack: emAttack }));
console.log(({ plHealth: plHealth }));
console.log(({ emHealth: emHealth }));
console.log(({ plAttack: plAttack }));
console.log(({ emAttack: emAttack }));
console.log(({ dmgModel: dmgModel }));
//Console 
