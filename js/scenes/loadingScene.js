// create a new scene
let loadingScene = new Phaser.Scene('Loading');

// load asset files for our game
loadingScene.preload = function() {
  let halfW = this.sys.game.config.width/2;
  let halfH = this.sys.game.config.height/2;

  let logo = this.add.sprite(halfW,100,'logo'); // This logo is available
  // scale logo
  let hScale = this.sys.game.config.height/logo.height;
  let wScale = this.sys.game.config.width/logo.width;
  let minScale = Math.min(hScale,wScale);

  let text = this.add.text(this.sys.game.config.width/2, this.sys.game.config.height/(1.5), "LOADING", {
        font: '40px Arial',
        fill: '#000080'
    }).setOrigin(0.5,0.5);
  text.depth=3;
  logo.setScale(minScale,minScale);



  // progressBar
  let bgBar = this.add.graphics();
  let barW = 150;
  let barH = 30;
  bgBar.setPosition(halfW-(barW/2),halfH-(barH/2));
  bgBar.fillStyle(0xF5F5F5,1);
  bgBar.fillRect(0,0, barW, barH);

  let progBar = this.add.graphics();
  progBar.setPosition(halfW-(barW/2),halfH-(barH/2));

  this.load.on('progress', function(value){
      // clearing progress bar (to draw again)
      progBar.clear();

      // set Style
      progBar.fillStyle(0x9AD98D, 1);

      // draw Rect
      progBar.fillRect(0,0,value * barW, barH);

  },this);


  // load assets
  this.load.image('bullet', 'assets/images/bullet.png');
  this.load.image('enemyBullet', 'assets/images/enemy-bullet.png');
  this.load.spritesheet('invader', 'assets/images/invader32x32x4.png', { frameWidth: 32, frameHeight: 32 });
  this.load.image('ship', 'assets/images/player.png');
  this.load.spritesheet('kaboom', 'assets/images/explode.png', { frameWidth: 128, frameHeight: 128 });
  this.load.image('starfield', 'assets/images/starfield.png');

};

loadingScene.create = function() {
    // animations can be created here
    this.anims.create({
        key: 'fly',
        frames: this.anims.generateFrameNames('alien',{ frames: [0,1,2,3] } ),
        yoyo: true,
        repeat: -1
    });

    // Kaboom
    this.anims.create({
        key: 'kaboom',
        frames: this.anims.generateFrameNames('kaboom',{ frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] } ),
        yoyo: false,
        repeat: 1
    });

    this.scene.start('Home');

}
