export default class SceneA extends Phaser.Scene {
    constructor(){
        super({key: "SceneA"});
    }
    preload(){

    }
    create(){
        let graphics = this.add.graphics();
        graphics.fillStyle(0xff3300,1); // rellear el cuadrado
        // dinuja rectas
        graphics.fillRect(100,200,600,300); // rectangulo
        graphics.fillRect(100,100,100,100); // cuadradp pequeño

        this.add.text(120,110,"A",{font: "96px Courier", fill: "#000000"})
    }
    update(time, delta){

    }

  

}