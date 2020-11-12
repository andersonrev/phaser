class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/');
        this.puntos = 0;
        
        /** Tercera forma */
        this.registry.set('puntos', 0);

    }

    create() {
        this.scene.launch('UI'); // Para que se ejecute en segundo plano
        this.input.on('pointerdown', () => {
            this.puntos++;


            /** primera forma */
            //this.scene.get('UI').addPoints(this.puntos);// esto recupera las scenas con sus metodos.

            /** Segunda forma Emitir el evento */
           this.registry.events.emit('puntos', this.puntos)

            /** Tercera Forma */
        //    this.registry.set('puntos', this.puntos);

        /**----------------------------- */

        if(this.puntos >= 10){

            this.scene.stop('UI');
            this.scene.start('Gameover', this.puntos);
        }

        });




    }
}
export default Bootloader;