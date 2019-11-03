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
     volume: 0.0,
    autoplay: true,
     loop: true,
   });
    
  var playBackground =  sound.play();
   sound.fade(0, 1, 3000, playBackground);
    


    
    
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
}



    container.x = 34;
    container.y = 10;


//card Anchors

    card1.anchor.x = 0;
    card1.anchor.y = 0;
    card2.anchor.x = 0;
    card2.anchor.y = 0;

// move the sprite to the center of the canvas
    card1.position.x = -1050;
    card1.position.y = 150;
    card2.position.x = 1450;
    card2.position.y = 150;
    
//Card Alpha    
    card1.alpha = 0;
    card2.alpha = 0;

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
    
    function particle(){
        
        var emitter = new PIXI.particles.Emitter(

	// The PIXI.Container to put the emitter in
	// if using blend modes, it's important to put this
	// on top of a bitmap, and not use the root stage Container
	container,

	// The collection of particle images to use
	[PIXI.Texture.fromImage('assets/mc.png')],

	// Emitter configuration, edit this to change the look
	// of the emitter
	{
		alpha: {
			list: [
				{
					value: 0.8,
					time: 0
				},
				{
					value: 0.1,
					time: 1
				}
			],
			isStepped: false
		},
		scale: {
			list: [
				{
					value: 1,
					time: 0
				},
				{
					value: 0.3,
					time: 1
				}
			],
			isStepped: false
		},
		color: {
			list: [
				{
					value: "fb1010",
					time: 0
				},
				{
					value: "f5b830",
					time: 1
				}
			],
			isStepped: false
		},
		speed: {
			list: [
				{
					value: 200,
					time: 0
				},
				{
					value: 100,
					time: 1
				}
			],
			isStepped: false
		},
		startRotation: {
			min: 0,
			max: 360
		},
		rotationSpeed: {
			min: 0,
			max: 0
		},
		lifetime: {
			min: 0.5,
			max: 0.5
		},
		frequency: 0.008,
		spawnChance: 1,
		particlesPerWave: 1,
		emitterLifetime: 0.31,
		maxParticles: 1000,
		pos: {
			x: 0,
			y: 0
		},
		addAtBack: false,
		spawnType: "circle",
		spawnCircle: {
			x: 0,
			y: 0,
			r: 10
		}
	}
);

// Calculate the current time
var elapsed = Date.now();

// Update function every frame
var update = function(){

	// Update the next frame
	requestAnimationFrame(update);

	var now = Date.now();

	// The emitter requires the elapsed
	// number of seconds since the last update
	emitter.update((now - elapsed) * 0.001);
	elapsed = now;

	// Should re-render the PIXI Stage
	// renderer.render(stage);
};

// Start emitting
emitter.emit = true;

// Start the update
update();
        
    }

/*global TimelineMax*/
/*global Power4*/
/*global Power3*/

    var tl = new TimelineMax({ repeat: 0, repeatDelay: 0.5, yoyo: true })
    .to(card1, 1, { pixi: { x: 125, y: 150,}, ease: Power3.easeInOut }, 0.9 )
    .to(card1, 2, { pixi: {alpha: 1, delay:7.5,}, ease: Power3.easeInOut }, 0.5)
    .to(card1, 3, { pixi: { x: 125, y: 150, scale: 0.5,}, ease: Power3.easeInOut }, 0.9)

    var t2 = new TimelineMax({ repeat: 0, repeatDelay: 0.5, yoyo: true })
    .to(card2, 1, { pixi: { x: 125, y: 225,},transformOrigin:'50% 50%', ease: Power3.easeInOut }, 0.9)
    .to(card2, 2, { pixi: {alpha: 1, delay:7.5,}, ease: Power3.easeInOut }, 0.9)
    .to(card2, 3, { pixi: { x: 775, y: 150, scale: 0.5 }, ease: Power3.easeInOut }, 0.9)
    
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
CustomEase.create("plAttackEase", "M0,0 C0.126,0.382 0.282,0.674 0.44,0.822 0.632,1.002 0.818,1 1,1");

//buggy rotation always from top left even though its set to 50/50% center


document.getElementById("cpuLoose").addEventListener("click", function(){
    
var plAttackAnim  = new TimelineMax({ repeat: 0, repeatDelay: 0.5, yoyo: false })
    .set(".card2", {transformOrigin: "50% 50%"})
    .set(".plAttackEase", {duration: 2})
    .to(card1,2, { pixi: {x: 400, y: 150, scale: 0.5,}, ease: "Power4.easeIn", })
   // .to(card1, 2, { pixi: {x: 400, y: 150, scale: 0.5,}, ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.174,0.674 0.3,0.8 0.432,0.932 0.504,1 1,1") }, 0)
    .call(PlayHitSound)
    .to(vs,    2, { pixi: {alpha: 0, }, ease: Power4.easeInOut }, 0.0)
    .to(card2, 2, { pixi: {x: 1500, y: 150, scale: 0.2, rotation:'+=660'},transformOrigin:'center',ease:Power3.easeInOut }, 2.0)
    .to(card1, 2, { pixi: {x: 450, y: 150, scale: 0.5,}, ease: Power4.easeInOut }, 2.3)
    .to(card1, 2, { pixi: {x: 400, y: 120, scale: 0.6,}, ease: Power4.easeInOut }, 2.6)

    
});

/*global plAttackAnim*/
document.getElementById("playerLoose").addEventListener("click", function(){
var cpuAttackAnim  = new TimelineMax({ repeat: 0, repeatDelay: 0.5, yoyo: true })
    .to(card2, 2, { pixi: {x: 500, y: 150, scale: 0.5,}, ease: Power4.easeInOut }, 0)
    .call(PlayHitSound)
    .to(vs,    2, { pixi: {alpha: 0, }, ease: Power4.easeInOut }, 0.0)
    .to(card1, 2, { pixi: {x: -1000, y: 150, scale: 0.2, rotation:1000,transformOrigin:"500px 300px", }, ease: Power4.easeInOut }, 2.0)
    .to(card2, 2, { pixi: {x: 450, y: 150, scale: 0.5,}, ease: Power4.easeInOut }, 2.3)
    .to(card2, 2, { pixi: {x: 410, y: 120, scale: 0.6,}, ease: Power4.easeInOut }, 2.6)
});

function PlayHitSound() {   
var hitSound = new Howl({
  src: ['assets/audioattack.mp3'],
   autoplay: true,
   volume: 0.2,
  });

hitSound.once('load', function(){
  hitSound.stop();
});

}
        
}

function PlayWinSound() {   
var winSound = new Howl({
  src: ['assets/cardwin.mp3'],
   autoplay: true,
   volume: 0.2,
});

winSound.once('load', function(){
  winSound.stop();
});
        
        
        
}   