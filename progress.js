
    var  progress = new PIXI.Container();

    var container = new PIXI.Container();

    var cardContainer = new PIXI.Container();

// set container
//Set background
    progress.addChild(container);
    
    var landscapeTexture = PIXI.Texture.fromImage('assets/2613089.jpg');
    var background = new PIXI.Sprite(landscapeTexture);

//Background to stage
    progress.addChild(background);

// Background positions
    background.anchor.x = 0;
    background.anchor.y = 0;
    background.position.x = 0;
    background.position.y = 0;
    background.scale.x =0.7; 
    background.scale.y =0.7; 
    
//construct the images 
{
// ui
         { var deckUi = PIXI.Sprite.fromImage('assets/deck-ui.png');
container.addChild(deckUi);
    }
    { var progressInner = PIXI.Sprite.fromImage('assets/progress-inner.png');
container.addChild(deckUi);
    }
    { var cancelUi = PIXI.Sprite.fromImage('assets/cancel.png');
container.addChild(cancelUi);
    }
    
    { var arrowLeftUi = PIXI.Sprite.fromImage('assets/arrow left.png');
container.addChild(arrowLeftUi);
    }
    
    { var arrowRightUi = PIXI.Sprite.fromImage('assets/arrow right.png');
container.addChild(arrowRightUi);
    }
    
}


//add cards
{
         { var deck1 = PIXI.Sprite.fromImage('assets/card1.png');
container.addChild(deckUi);
    }
    { var deck2 = PIXI.Sprite.fromImage('assets/card2.png');
container.addChild(cancelUi);
    }
    
      { var deck3 = PIXI.Sprite.fromImage('assets/card3.png');
container.addChild(deckUi);
    }
    { var deck4 = PIXI.Sprite.fromImage('assets/card4.png');
container.addChild(cancelUi);
    }

    
}


// Construct the text
var cardText = new PIXI.Text('CARDS', { font: '40px McLaren', fill: 'black', align: 'center' });
var deckText = new PIXI.Text('DECKS', { font: '40px McLaren', fill: 'white', align: 'center' });


// set container
    container.x = 34;
    container.y = 10;
    cardContainer.x = 800
    cardContainer.y = 100
    
    //Position the menu
    deckUi.anchor.x = 0;
    deckUi.anchor.y = 0;
    deckUi.position.x = 80;
    deckUi.position.y = 40;
    deckUi.scale.x = 0.7;
    deckUi.scale.y = 0.7;
    
    //position cancel
    cancelUi.anchor.x = 0;
    cancelUi.anchor.y = 0;
    cancelUi.position.x = 1100;
    cancelUi.position.y = 80;
    cancelUi.scale.x = 0.7;
    cancelUi.scale.y = 0.7;
    
    //position arrow left
    arrowLeftUi.anchor.x = 0;
    arrowLeftUi.anchor.y = 0;
    arrowLeftUi.position.x = 135;
    arrowLeftUi.position.y = 608;
    arrowLeftUi.scale.x = 0.7;
    arrowLeftUi.scale.y = 0.7;
    
    // possition arrow right
    arrowRightUi.anchor.x = 0;
    arrowRightUi.anchor.y = 0;
    arrowRightUi.position.x = 1080;
    arrowRightUi.position.y = 608;
    arrowRightUi.scale.x = 0.7;
    arrowRightUi.scale.y = 0.7;
    
    
        // position card text
    cardText.anchor.x = 0;
    cardText.anchor.y = 0;
    cardText.position.x = 190;
    cardText.position.y = 70;
    cardText.scale.x = 1.0;
    cardText.scale.y = 1.0;
    
    
        // possition deck text
    deckText.anchor.x = 0;
    deckText.anchor.y = 0;
    deckText.position.x = 440;
    deckText.position.y = 70;
    deckText.scale.x = 1.0;
    deckText.scale.y = 1.0;
    
//Position the card container for sliding
// cardContainer.anchor.x = 0;
// cardContainer.anchor.y = 0;
    cardContainer.position.x = 100;
    cardContainer.position.y = 200;
// contents of slide container
    cardContainer.addChild(deck1);
    cardContainer.addChild(deck2);
    cardContainer.addChild(deck3);
    cardContainer.addChild(deck4);
    
    //positions decks
    deck1.anchor.x = 0;
    deck1.anchor.y = 0;
    deck1.position.x = 60;
    deck1.position.y = 70;
    deck1.scale.x = 0.3;
    deck1.scale.y = 0.3;
    
        //positions decks
    deck2.anchor.x = 0;
    deck2.anchor.y = 0;
    deck2.position.x = 300;
    deck2.position.y = 70;
    deck2.scale.x = 0.3;
    deck2.scale.y = 0.3;
    
        //positions decks
    deck3.anchor.x = 0;
    deck3.anchor.y = 0;
    deck3.position.x = 540;
    deck3.position.y = 70;
    deck3.scale.x = 0.3;
    deck3.scale.y = 0.3;
    
        //positions decks
    deck4.anchor.x = 0;
    deck4.anchor.y = 0;
    deck4.position.x = 780;
    deck4.position.y = 70;
    deck4.scale.x = 0.3;
    deck4.scale.y = 0.3;
    
    
    
    
            //positions decks
    progressInner.anchor.x = 0;
     progressInner.anchor.y = 0;
     progressInner.position.x = 100;
     progressInner.position.y = 240;
     progressInner.scale.x = 0.6;
    progressInner.scale.y = 0.6;
    
    
    //Paint images to screen
    progress.addChild(progressInner);
    progress.addChild(deckUi);
    progress.addChild(cancelUi);
    progress.addChild(arrowLeftUi);
    progress.addChild(arrowRightUi);
    progress.addChild(deckText);
    progress.addChild(cardText);
    progress.addChild(cardContainer);
    
// Begin Interactive controls
cancelUi.interactive = true;
cancelUi.on('touchend', function(e) {
    
    var script = document.createElement('script'); 
          
        script.src = "main.js"; 
          
        document.head.appendChild(script)  
        
        console.log("play touched");
});

cancelUi.click = function(e) {
    
    

    progress.removeChild(progressInner);
    progress.removeChild(deckUi);
    progress.removeChild(cancelUi);
    progress.removeChild(arrowLeftUi);
    progress.removeChild(arrowRightUi);
    progress.removeChild(deckText);
    progress.removeChild(cardText);
    progress.removeChild(cardContainer);
    
    progress.addChild(menu);
    progress.addChild(logo);
    progress.addChild(play);
    progress.addChild(decks);
    progress.addChild(options);
    progress.addChild(quit);
 }
    

                
// start animating
    animate();

    function animate() {



    requestAnimationFrame(animate);

    // render the root container
    renderer.render(progress);
}