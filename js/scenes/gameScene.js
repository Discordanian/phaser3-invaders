// create a new scene
let gameScene = new Phaser.Scene('Game');

// some parameters for our scene
gameScene.init = function() {
    this.settings = {
        globalValA: 100,
        globalValB: 100
    }
}; // gameScene.init

// executed once, after assets were loaded
gameScene.create = function() {

}; // gameScene.create

gameScene.gameOver = function() {

    this.timeEventStats = this.time.addEvent({
        delay: 2000,
        repeat: 0, // repeat forever = -1
        callbackScope: this,
        callback: function() {
            // Clean up this HUD and take them HOME
            this.scene.start('Home');
        }

    });

} // gameScene.gameOver

