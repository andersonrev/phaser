export default class Palas extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,type){
        super(scene,x ,y , type);
        scene.add.existing(this); // lo hace existente en el plano
        // agregar fisicas
        scene.physics.world.enable(this);
        // especificar que este objeto es inamovible
        this.body.immovable= true;
        this.body.setCollideWorldBounds(true)
    }
}