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
// Ai 
//Base Binary Value 50/50
var BinBase = 50;
//Set Difficulty Modifier
var easy = 10;
var medium = 20;
var hard = 40;
var outPut = 0;
//Init Variables 
//player score
var plPower = 0;
var plTwist = 0;
//Cpu score
var emPower = 0;
var emTwist = 0;
//bonus scores is 
var plBonus = 0;
var emBonus = 0;
//set the winner
var winner = 0;
//Damage Mechanics
var dmgModel = 0;
//Simulate the players choice as best poosible picks
var plResultPower = Math.max(plStar, plHeart, plDefence);
var plResultTwist = Math.max(plBlue, plOrange, plGreen);
//Create the beat Me score
var beatMe = BinBase + medium;
//Roll a D100
var diceRoll = Math.floor(Math.random() * 100) + 1;
// do the player simulation
{
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
    //If diceRoll is less than beat me Success CPU Is smart
    if (diceRoll < beatMe) {
        console.log(("CPU Is Smart"));
        // CPU chooses best result 
        var emResultPower_1 = Math.max(emStar, emHeart, emDefence);
        var emResultTwist_1 = Math.max(emBlue, emOrange, emGreen);
        // find the best power
        if (emStar = emResultPower_1) {
            emPower = emResultPower_1;
            console.log(({ emPower: emPower }));
        }
        else if (emHeart = emResultPower_1) {
            emPower = emResultPower_1;
            console.log(({ emPower: emPower }));
        }
        else if (emDefence = emResultPower_1) {
            emPower = emResultPower_1;
            console.log(({ emPower: emPower }));
        }
        //Find which twist was the greater and add it's value to emTwist
        if (emBlue = emResultTwist_1) {
            emTwist = emResultTwist_1;
            console.log(({ emTwist: emTwist }));
        }
        else if (plOrange = emResultTwist_1) {
            emTwist = emResultTwist_1;
            console.log(({ emTwist: emTwist }));
        }
        else if (emGreen = emResultTwist_1) {
            emTwist = emResultTwist_1;
            console.log(({ emTwist: emTwist }));
        }
    }
    // if the beat me is failed CPU is Dumb
    else if (diceRoll > beatMe) {
        // CPU chooses worst result
        var emResultPower_2 = Math.min(emStar, emHeart, emDefence);
        var emResultTwist_2 = Math.min(emBlue, emOrange, emGreen);
        if (emStar = emResultPower_2) {
            emPower = emResultPower_2;
            console.log(({ emPower: emPower }));
        }
        else if (emHeart = emResultPower_2) {
            emPower = emResultPower_2;
            console.log(({ emPower: emPower }));
        }
        else if (emDefence = emResultPower_2) {
            emPower = emResultPower_2;
            console.log(({ emPower: emPower }));
        }
        //Find which twist was the greater and add it's value to emTwist
        if (emBlue = emResultTwist_2) {
            emTwist = emResultTwist_2;
            console.log(({ emTwist: emTwist }));
        }
        else if (plOrange = emResultTwist_2) {
            emTwist = emResultTwist_2;
            console.log(({ emTwist: emTwist }));
        }
        else if (emGreen = emResultTwist_2) {
            emTwist = emResultTwist_2;
            console.log(({ emTwist: emTwist }));
        }
        console.log(("CPU Is Dumb"));
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
            //sucky solution want booleen
            winner = 1;
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
            winner = 2;
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
    console.log(({ diceRoll: diceRoll }));
}
//Console 
