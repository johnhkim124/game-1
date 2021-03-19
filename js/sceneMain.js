class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
    	//load our images or sounds
        this.load.image("road", "images/road.jpg");
        this.load.image("cars", "images/cars.png", {frameWidth:60, frameHeight:126});
    }
    create() {
        //define our objects
        let road = new Road({scene:this});
        road.x = game.config.width/2;
    }
    update() {
        //constant running loop
    }
}