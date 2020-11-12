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
        this.logo = this.add.image(60, 60, 'logo_gamma');
        this.logo_2 = this.add.image(60, 220, 'logo_gamma');

        let timeline = this.tweens.timeline(
            {
                targets: [this.logo, this.logo_2],
                ease: 'Power1',
                duration: 2000,
                loop: -1,
                yoyo: -2,
                tweens: [
                    {
                        x: 400
                    }
                ]

            }
        );
        
    }
}
export default Bootloader;