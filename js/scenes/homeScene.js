// create a new scene
let homeScene = new Phaser.Scene('Home');


homeScene.create = function() {
    // game Background with active input to start the game
    // let bg = this.add.sprite(0,0,'background').setOrigin(0,0).setInteractive();

    let text = this.add.text(this.sys.game.config.width/2, this.sys.game.config.height/2, "Invaders 3", {
        font: '40px Arial',
        fill: '#ffffff'
    }).setOrigin(0.5,0.5);
    text.depth=3;
    text.setScale(this.sys.game.config.width/text.width);

    let offset = 10+ (text.height/2);

    let textBg = this.add.graphics();
    textBg.fillStyle(0x000000,0.5);
    textBg.fillRect(0,(this.sys.game.config.height/2)-offset,this.sys.game.config.width,offset*2);

    /*
    bg.on('pointerdown',function() {
        this.scene.start('Game');
    },this);
    */

    console.log("ASDF " + asdf);


};
