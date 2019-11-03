{"filter":false,"title":"progress.js","tooltip":"/progress.js","undoManager":{"mark":5,"position":5,"stack":[[{"start":{"row":0,"column":0},"end":{"row":126,"column":1},"action":"insert","lines":["","    var  progress = new PIXI.Container();","","    var container = new PIXI.Container();","","// set container","//Set background","    progress.addChild(container);","    var landscapeTexture = PIXI.Texture.fromImage('2613089.jpg');","    var background = new PIXI.Sprite(landscapeTexture);","","//Background to stage","    progress.addChild(background);","","// Background positions","    background.anchor.x = 0;","    background.anchor.y = 0;","    background.position.x = 0;","    background.position.y = 0;","    background.scale.x =0.7; ","    background.scale.y =0.7; ","    ","//construct the images ","{","// menu-ui","         { var deckUi = PIXI.Sprite.fromImage('deck ui.png');","container.addChild(deckUi);","    }","    { var cancelUi = PIXI.Sprite.fromImage('cancel.png');","container.addChild(cancelUi);","    }","    ","    { var arrowLeftUi = PIXI.Sprite.fromImage('arrow left.png');","container.addChild(arrowLeftUi);","    }","    ","    { var arrowRightUi = PIXI.Sprite.fromImage('arrow right.png');","container.addChild(arrowRightUi);","    }","    ","}","","// Construct the text",""," var cardText = new PIXI.Text('CARDS', { font: '40px McLaren', fill: 'black', align: 'center' });","var deckText = new PIXI.Text('DECKS', { font: '40px McLaren', fill: 'white', align: 'center' });","","","// set container","    container.x = 34;","    container.y = 10;","    ","    //Position the menu","    deckUi.anchor.x = 0;","    deckUi.anchor.y = 0;","    deckUi.position.x = 80;","    deckUi.position.y = 40;","    deckUi.scale.x = 0.7;","    deckUi.scale.y = 0.7;","    ","    //position cancel","    cancelUi.anchor.x = 0;","    cancelUi.anchor.y = 0;","    cancelUi.position.x = 1100;","    cancelUi.position.y = 80;","    cancelUi.scale.x = 0.7;","    cancelUi.scale.y = 0.7;","    ","    //position arrow left","    arrowLeftUi.anchor.x = 0;","    arrowLeftUi.anchor.y = 0;","    arrowLeftUi.position.x = 135;","    arrowLeftUi.position.y = 608;","    arrowLeftUi.scale.x = 0.7;","    arrowLeftUi.scale.y = 0.7;","    ","    // possition arrow right","    arrowRightUi.anchor.x = 0;","    arrowRightUi.anchor.y = 0;","    arrowRightUi.position.x = 1080;","    arrowRightUi.position.y = 608;","    arrowRightUi.scale.x = 0.7;","    arrowRightUi.scale.y = 0.7;","    ","    ","        // position card text","    cardText.anchor.x = 0;","    cardText.anchor.y = 0;","    cardText.position.x = 190;","    cardText.position.y = 70;","    cardText.scale.x = 1.0;","    cardText.scale.y = 1.0;","    ","    ","        // possition deck text","    deckText.anchor.x = 0;","    deckText.anchor.y = 0;","    deckText.position.x = 440;","    deckText.position.y = 70;","    deckText.scale.x = 1.0;","    deckText.scale.y = 1.0;","    ","    ","    ","    ","    //Paint images to screen","","    progress.addChild(deckUi);","    progress.addChild(cancelUi);","    progress.addChild(arrowLeftUi);","    progress.addChild(arrowRightUi);","    progress.addChild(deckText);","    progress.addChild(cardText);","                ","                ","// start animating","    animate();","","    function animate() {","","","","    requestAnimationFrame(animate);","","    // render the root container","    renderer.render(progress);","}"],"id":1}],[{"start":{"row":8,"column":51},"end":{"row":8,"column":58},"action":"insert","lines":["assets/"],"id":2}],[{"start":{"row":25,"column":47},"end":{"row":25,"column":54},"action":"insert","lines":["assets/"],"id":3}],[{"start":{"row":28,"column":44},"end":{"row":28,"column":51},"action":"insert","lines":["assets/"],"id":4}],[{"start":{"row":32,"column":47},"end":{"row":32,"column":54},"action":"insert","lines":["assets/"],"id":5}],[{"start":{"row":36,"column":48},"end":{"row":36,"column":55},"action":"insert","lines":["assets/"],"id":6}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":36,"column":55},"end":{"row":36,"column":55},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":312,"mode":"ace/mode/javascript"}},"timestamp":1572783543694,"hash":"aa7240612e5595966044e15c7ddc292e9563b213"}