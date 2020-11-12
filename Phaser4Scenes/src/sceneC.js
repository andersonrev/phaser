class SceneC extends Phaser.Scene {
    constructor(){
        super({key: "SceneC", active: true});
    }
    preload(){

    }
    create(){
        let graphics = this.add.graphics();
        graphics.fillStyle(0xff9999,1); // rellear el cuadrado
        // dinuja rectas
        graphics.fillRect(100,200,600,300); // rectangulo
        graphics.fillRect(300,100,100,100); // cuadradp pequeño
        this.add.text(320,110,"C",{font: "96px Courier", fill: "#000000"});

        // this.scene.bringToTop(); "Encima de todo"
        // this.scene.sendToBack(); "Atras de todo"
        // this.scene.moveUp(); "Un paso arrriba"
        // this.scene.moveDown(); "Un paso atras"
        // this.scene.moveAbove(); "Encima de una escena indicada"
        // this.scene.moveBelow(); "Abajo de una escena indicada"

    }
    update(time, delta){

    }

  

}