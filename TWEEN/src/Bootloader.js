class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/');

        this.load.image('logo_gamma', 'logo_gamma.png');

        this.load.on('complete', () => {
            console.log('Load complete');
        });
    }

    create() {
        this.logo = this.add.image(40, this.scale.height / 2, 'logo_gamma');

        let twen = this.tweens.add({
            targets: this.logo,
            props: {
                x: {
                    value: 300,
                    duration: 1000
                },
                y: {
                    value: 200,
                    duration: 1000
                }
            },
            x: 300,
            repeat: 2,
            yoyo: true,
            ease: 'Power1',
            // delay: 1000,
            // hold: 1000,
            // repeatDelay: 1000,
            // completeDelay: 1000,
            onStart: () => console.log('inicia'),
            onYoyo: () => console.log('Yoyo'),
            onComplete: () => console.log('Complete'),
            onRepeat: () => console.log('repeat')
        });

            // pausar y reanudar el tween

        // setTimeout(() => {
        //     twen.pause();
        // },2500);

        // setTimeout(()=>{
        //     twen.resume();
        // },4000);
    
        // SI se quiere tbn hacer cmbios en el eje Y se elimina la duracion y se pone el props.
    }
}
export default Bootloader;