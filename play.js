//Begin MAIN PLAY AREA 
//
//
//  
 // // Load them google fonts before starting...!
    window.WebFontConfig = {
        google: {
        families: ['Snippet', 'Arvo:700italic', 'Podkova:700']
    },

    
};

// include the web-font loader script
/* jshint ignore:start */
       (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
})();

/* global Howl*/
//setup music
var sound = new Howl({
   src: ['assets/backgroundmusic.mp3'],
     autoplay: true,
     loop: true,
     preload: true,
  });
    var playBackground =  sound.play();

 sound.fade(0, 0.2, 3000, playBackground);
    

    
/* jshint ignore:end */
    // create white text
    var score1 = new PIXI.Text('Player 10', { font: '35px Snippet', fill: 'white', align: 'center' });
    var score2 = new PIXI.Text('CPU 10', { font: '35px Snippet', fill: 'white', align: 'center' });

    
// create the root of the scene graph
    var stage = new PIXI.Container();

    var container = new PIXI.Container();

// set container
//Set background
    stage.addChild(container);
    var landscapeTexture = PIXI.Texture.fromImage('assets/2613089.jpg');
    

    var background = new PIXI.Sprite(landscapeTexture);

//Background to stage
    stage.addChild(background);

// Background positions
    background.anchor.x = 0;
    background.anchor.y = 0;
    background.position.x = 0;
    background.position.y = 0;
    background.scale.x =0.7; 
    background.scale.y =0.7; 



{
// get card 1
 {
        var card1 = PIXI.Sprite.fromImage('assets/card1.png');
        
     
        container.addChild(card1);
    }
    
    // get card 2
    {
        var card2 = PIXI.Sprite.fromImage('assets/card2.png');
        
     
        container.addChild(card2);
    }
    // get score orange
    {
        var scoreOrange = PIXI.Sprite.fromImage('assets/score-orange.png');
        
     
        container.addChild(scoreOrange);
    }
    // get score red
    {
        var scoreRed = PIXI.Sprite.fromImage('assets/score-red.png');
        
     
        container.addChild(scoreRed);
    }
     {
        var vs = PIXI.Sprite.fromImage('assets/VS.png');
        
     
        container.addChild(vs);
    }
     {
        var cancelUi = PIXI.Sprite.fromImage('assets/cancel.png');
        
     
        container.addChild(cancelUi);
    }
}



   container.x = 34;
  container.y = 10;


//card Anchors

    card1.anchor.x = 0.5;
    card1.anchor.y = 0.5;
    card2.anchor.x = 0.5;
    card2.anchor.y = 0.5;

// move the sprite to the center of the canvas
    card1.position.x = -650;
    card1.position.y = 550;
    card2.position.x = 1750;
    card2.position.y = 250;
    
//Card Alpha    
    card1.alpha = 0;
   // card2.alpha = 0;

// Card scale
    card1.scale.x =1.0; 
    card1.scale.y =1.0;
    card2.scale.x =1.0; 
    card2.scale.y =1.0;

// set score positions
    score2.position.set(100);
    score1.position.set(1);

// render text to stage

    stage.addChild(scoreOrange);
    stage.addChild(scoreRed);
    stage.addChild(score1);
    stage.addChild(score2);
    stage.addChild(vs);
    stage.addChild(card1);
    stage.addChild(card2);




//set score position
    score1.position.x = 115;
    score1.position.y = 24;

    score2.position.x = 1028;
    score2.position.y = 24;

//set score position
    scoreOrange.position.x = 100;
    scoreOrange.position.y = 10;

    scoreRed.position.x = 1000;
    scoreRed.position.y = 10;
    
//Set VS position
    vs.position.x = 570;
    vs.position.y = 350;
    vs.scale.x =0.07; 
    vs.scale.y =0.07; 
    vs.alpha = 0;
    

//position cancel
    cancelUi.anchor.x = 0;
    cancelUi.anchor.y = 0;
    cancelUi.position.x = 1190;
    cancelUi.position.y = 20;
    cancelUi.scale.x = 0.4;
    cancelUi.scale.y = 0.4;
    

stage.addChild(cancelUi);


// Begin Interactive controls
cancelUi.interactive = true;

cancelUi.on('touchend', function(e) {
    
    var script = document.createElement('script'); 
          
        script.src = "main.js"; 
          
        document.head.appendChild(script)  
        
        console.log("play touched");
});

cancelUi.click = function(e) {
    
window.location = "index.html"
     console.log("play touched");
 }     
    

/*global TimelineMax*/
/*global Power4*/
/*global Power3*/

    var tl = new TimelineMax({})
    .to(card1, 1, { pixi: { x: 1125, y: 750,}, ease: Power3.easeInOut }, 0.9 )
    .to(card1, 2, { pixi: {alpha: 1, delay:7.5,}, ease: Power3.easeInOut }, 0.5)
    .to(card1, 3, { pixi: { x: 325, y: 450, scale: 0.5,}, ease: Power3.easeInOut }, 0.9)

    var t2 = new TimelineMax({})
 .to(card2, 1, { pixi: { x: -1525, y: 1825,}, ease: Power3.easeInOut }, 0.9)
   .to(card2, 2, { pixi: {alpha: 1, delay:7.5,}, ease: Power3.easeInOut }, 0.5)
  .to(card2, 3, { pixi: { x: 975, y: 450, scale: 0.5 }, ease: Power3.easeInOut }, 0.9)
    
    var t3 = new TimelineMax({ repeat: 0, delay: 1.5, yoyo: true })
    .to(vs, 4, { pixi: {alpha: 1, }}, 0.1);
    


// start animating
    animate();

    function animate() {



    requestAnimationFrame(animate);

    // render the root container
    renderer.render(stage);
    
/*global plAttackAnim*/
/*global CustomEase*/
//CustomEase.create("plAttackEase", "M0,0 C0.11,0.494 0.174,0.674 0.3,0.8 0.432,0.932 0.504,1 1,1");

//buggy rotation always from top left


document.getElementById("cpuLoose").addEventListener("click", function(){
    
var plAttackAnim  = new TimelineMax({ })
     //.to(card1,duration 2, 2, { pixi: {x: 400, y: 150, scale: 0.5,}, ease: "plAttackEase", })
     .to(card1, 2, { pixi: {x: 1125, y: 150, scale: 0.5,}, ease:Power3.easeInOut  }, 0)
     .call(PlayHitSound)
    .to(vs,    2, { pixi: {alpha: 0,}, ease: Power4.easeInOut }, 0.0)
    .call(particle)
    .to(card2, 2, { pixi: {x: 1600, y: 150, scale: 0.2,rotation:512},ease:Power3.easeInOut }, 2.0)
    .call(PlayWinSound)
    .to(card1, 2, { pixi: {x: 450, y: 150, scale: 0.5,}, ease: Power4.easeInOut }, 2.3)
    .to(card1, 2, { pixi: {x: 400, y: 120, scale: 0.6,}, ease: Power4.easeInOut }, 2.6)

    
});

/*global plAttackAnim*/
document.getElementById("playerLoose").addEventListener("click", function(){
var cpuAttackAnim  = new TimelineMax({  })
    .to(card2, 2, { pixi: {x: 500, y: 150, scale: 0.5,}, ease: Power4.easeInOut }, 0)
    .call(PlayHitSound)
    .to(vs,    2, { pixi: {alpha: 0, }, ease: Power4.easeInOut }, 0.0)
    .to(card1, 2, { pixi: {x: -1000, y: 150, scale: 0.2, rotation:1000,transformOrigin:"500px 300px", }, ease: Power4.easeInOut }, 2.0)
    .to(card2, 2, { pixi: {x: 450, y: 150, scale: 0.5,}, ease: Power4.easeInOut }, 2.3)
    .to(card2, 2, { pixi: {x: 410, y: 120, scale: 0.6,}, ease: Power4.easeInOut }, 2.6)
});

//Touch and Click Rigging 
    // Card 1
card1.interactive = true

card1.on('touchend', function(e) {var Animation  = new TimelineMax({ })
     //.to(card1,duration 2, 2, { pixi: {x: 400, y: 150, scale: 0.5,}, ease: "plAttackEase", })
     .to(card1, 2, { pixi: {x: 400, y: 150, scale: 0.5,}, ease:Power3.easeInOut  }, 0)
     .call(PlayHitSound)
     .call(particle)
    .to(vs,    2, { pixi: {alpha: 0,}, ease: Power4.easeInOut }, 0.0)
    .to(card2, 2, { pixi: {x: 1600, y: 150, scale: 0.2,rotation:512},ease:Power3.easeInOut }, 2.0)
    .call(PlayWinSound)
    .to(card1, 2, { pixi: {x: 450, y: 150, scale: 0.5,}, ease: Power4.easeInOut }, 2.3)
    .to(card1, 2, { pixi: {x: 400, y: 120, scale: 0.6,}, ease: Power4.easeInOut }, 2.6)});

card1.click = function(e) {var Animation  = new TimelineMax({ })
     //.to(card1,duration 2, 2, { pixi: {x: 400, y: 150, scale: 0.5,}, ease: "plAttackEase", })
     .to(card1, 2, { pixi: {x: 400, y: 150, scale: 0.5,}, ease:Power3.easeInOut  }, 0)
     .call(PlayHitSound)
     .call(particle)
    .to(vs,    2, { pixi: {alpha: 0,}, ease: Power4.easeInOut }, 0.0)
    .to(card2, 2, { pixi: {x: 1600, y: 150, scale: 0.2,rotation:512},ease:Power3.easeInOut }, 2.0)
    .call(PlayWinSound)
    .to(card1, 2, { pixi: {x: 450, y: 150, scale: 0.5,}, ease: Power4.easeInOut }, 2.3)
    .to(card1, 2, { pixi: {x: 400, y: 120, scale: 0.6,}, ease: Power4.easeInOut }, 2.6)}
 
 // Card 2
 card2.interactive = true

card2.on('touchend', function(e) {var cpuAttackAnim  = new TimelineMax({  })
    .to(card2, 2, { pixi: {x: 500, y: 150, scale: 0.5,}, ease: Power4.easeInOut }, 0)
    .call(PlayHitSound)
    .to(vs,    2, { pixi: {alpha: 0, }, ease: Power4.easeInOut }, 0.0)
    .to(card1, 2, { pixi: {x: -1000, y: 150, scale: 0.2, rotation:1000,transformOrigin:"500px 300px", }, ease: Power4.easeInOut }, 2.0)
    .to(card2, 2, { pixi: {x: 450, y: 150, scale: 0.5,}, ease: Power4.easeInOut }, 2.3)
    .to(card2, 2, { pixi: {x: 410, y: 120, scale: 0.6,}, ease: Power4.easeInOut }, 2.6)
});

card2.click = function(e) {var cpuAttackAnim  = new TimelineMax({  })
    .to(card2, 2, { pixi: {x: 500, y: 150, scale: 0.5,}, ease: Power4.easeInOut }, 0)
    .call(PlayHitSound)
    .to(vs,    2, { pixi: {alpha: 0, }, ease: Power4.easeInOut }, 0.0)
    .to(card1, 2, { pixi: {x: -1000, y: 150, scale: 0.2, rotation:1000,transformOrigin:"500px 300px", }, ease: Power4.easeInOut }, 2.0)
    .to(card2, 2, { pixi: {x: 450, y: 150, scale: 0.5,}, ease: Power4.easeInOut }, 2.3)
    .to(card2, 2, { pixi: {x: 410, y: 120, scale: 0.6,}, ease: Power4.easeInOut }, 2.6)
}
        
}   