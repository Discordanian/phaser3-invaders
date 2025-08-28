// create a new scene
let bootScene = new Phaser.Scene('Boot');
let asdf="Kurt";

// load asset files for our game
bootScene.preload = function() {

  // load assets
  this.load.image('logo','assets/images/Tangential_Cold_Studios.jpg');


};

bootScene.create = function() {

    this.scene.start('Loading');

}
