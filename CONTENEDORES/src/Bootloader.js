class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/');

        this.load.image('tabla', 'tabla.png');
    }

    create() {
        const centroW = this.sys.game.config.width /2;
        const centroH = this.sys.game.config.height / 2;

    
        let score = this.add.image(centroW, centroH, 'tabla').setScale(3);
        let prePuntos = this.add.text(centroW - 150, centroH -50, 'POINTS',{
            fontFamily:'Arial',
            fontSize: 30,
            color: '#fff'
        });

        let puntos = this.add.text(centroW, centroH -50, '0', {
            fontFamily: 'Arial',
            fontSize: 30,
            color: '#fff'
        });

        let contenedor = this.add.container(0,-300);
        contenedor.add([score, prePuntos, puntos]);
        //contenedor.setScale(2);


        this.tweens.add({
            targets: contenedor,
            duration: 600,
            ease: 'Pointer1',
            y: 0
        });

    }
}
export default Bootloader;