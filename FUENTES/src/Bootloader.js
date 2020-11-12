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
        // let texto = this.add.text(100,100, 'Hola Mundo',{
        //     color:  '#000000',
        //     backgroundColor: '#fff',
        //     fontSize: 40,
        //     fontStyle:'italic',
        //     padding: {
        //         top: 20,
        //         botton: 0,
        //         left: 20,
        //         rigth: 20

        //     }
        // });

        // texto.setBackgroundColor('#f0f');
        // texto.flipX = true;// para girar el texto
        // texto.alpha = 0.5;
        // texto.x = 300;

        const configText = {
            x: 50,
            y: 100,
            text: 'Hola\nMundo como estas?',
            style: {
                    fontFamily: 'pruebas',
                    backgroundColor: '#00ff00',
                    fontSize: 40,
                    align: 'center'
            }

        }

        const texto = this.make.text(configText);
        texto.setBackgroundColor('#ff0000')
    }
}
export default Bootloader;