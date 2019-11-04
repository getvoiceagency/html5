// set container
//Set background
    introstage.addChild(container);
    var landscapeTexture = PIXI.Texture.fromImage('assets/2613089.jpg');
    var background = new PIXI.Sprite(landscapeTexture);

//Background to stage
    introstage.addChild(background);

// Background positions
    background.anchor.x = 0;
    background.anchor.y = 0;
    background.position.x = 0;
    background.position.y = 0;
    background.scale.x =0.7; 
    background.scale.y =0.7; 
    
//construct the images for the menu
{
// menu-ui
 { var menu = PIXI.Sprite.fromImage('assets/menu-ui.png');
container.addChild(menu);
    }
     { var logo = PIXI.Sprite.fromImage('assets/logo.png');
container.addChild(logo);
    }
}

// construct the text 
 // create white text
    var play = new PIXI.Text('PLAY', { font: '35px McLaren', fill: 'black', align: 'center' });
    var decks = new PIXI.Text('Decks', { font: '35px McLaren', fill: 'white', align: 'center' });
    var options = new PIXI.Text('Menu', { font: '35px McLaren', fill: 'white', align: 'center' });
    var quit = new PIXI.Text('Quit', { font: '35px McLaren', fill: 'white', align: 'center' });

// set container
    container.x = 34;
    container.y = 10;


//Position the menu
    menu.anchor.x = 0;
    menu.anchor.y = 0;
    menu.position.x = 425;
    menu.position.y = 70;
    menu.scale.x = 0.7;
    menu.scale.y = 0.7;
    
//Position the logo
    logo.anchor.x = 0;
    logo.anchor.y = 0;
    logo.position.x = 585;
    logo.position.y = 105;
    logo.scale.x = 0.7;
    logo.scale.y = 0.7;
    
//position the text
    play.anchor.x = 0;
    play.anchor.y = 0;
    play.position.x = 611;
    play.position.y = 225;
    
    decks.anchor.x = 0;
    decks.anchor.y = 0;
    decks.position.x = 605;
    decks.position.y = 335;
    
    options.anchor.x = 0;
    options.anchor.y = 0;
    options.position.x = 610;
    options.position.y = 443;
    
    quit.anchor.x = 0;
    quit.anchor.y = 0;
    quit.position.x = 620;
    quit.position.y = 555;


//Paint images to screen

    introstage.addChild(menu);
    introstage.addChild(logo);
    introstage.addChild(play);
    introstage.addChild(decks);
    introstage.addChild(options);
    introstage.addChild(quit);
    

//Touch controlls
logo.interactive = true;
logo.on('touchend', function(e) {

        console.log("Logo Touched1");
});

//we have to load the playStage over the top of the stage.
logo.click = function(e) {
 var logotouch = new PIXI.Container();
        console.log("logo clicked");
 }

play.interactive = true;
play.on('touchend', function(e) {
    
    var script = document.createElement('script'); 
          
        script.src = "play.js"; 
          
        document.head.appendChild(script)  
        
        console.log("play touched");
});

play.click = function(e) {

var script = document.createElement('script'); 
          
        script.src = "play.js"; 
          
        document.head.appendChild(script)     
    
        console.log("play Clicked");
 }
 ///
decks.interactive = true;
decks.on('touchend', function(e) {
    
    var script = document.createElement('script'); 
          
        script.src = "progress.js"; 
          
        document.head.appendChild(script) 
        console.log("touch!!");
});

// DECK SCREEN BEGINS
decks.click = function(e) {
    
var script = document.createElement('script'); 
          
        script.src = "progress.js"; 
          
        document.head.appendChild(script) 
    
         console.log("click!!");
 }
 
options.interactive = true;
options.on('touchend', function(e) {
        console.log("touch!!");
});

options.click = function(e) {
        console.log("click!!");
 }
 
quit.interactive = true;
quit.on('touchend', function(e) {
        console.log("touch!!");
});

quit.click = function(e) {
        console.log("click!!");
 }



