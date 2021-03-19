class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
    	//load our images or sounds
        this.load.image("face", "images/face.png");
    }
    create() {
        //define our objects
        this.face = this.add.image(300, 700, "face");
    }
    update() {
        //constant running loop
    }
}