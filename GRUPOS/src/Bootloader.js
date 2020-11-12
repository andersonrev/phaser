class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/');

        this.load.animation('monedaData','monedas_anim.json');
        this.load.atlas('monedas','monedas.png', 'monedas_atlas.json')



    }

    create() {
        // let moneda = this.add.sprite(150,150, 'monedas');


        /** staticGroup crea un cuerpo estayio pero con fisicas */
        let grupo =  this.physics.add.group({
            key: 'monedas',
            repeat: 5,
            setXY: {
                x: 150,
                y: 150,
                stepX: 50
            }
        });

        let imagen = this.add.sprite(90,150, 'monedas');
        grupo.add(imagen);

        //  grupo.create(90,150, 'monedas');
        grupo.playAnimation('moneda')
        //  console.log(grupo.getChildren());

        //  grupo.children.entries.map((x)=> {
        //     x.setScale(2);
        //  });

        // grupo.getChildren().map((x)=> {
        //     x.setScale(2);
        // });

        grupo.children.iterate((x)=> {
            x.setScale(2);
            x.body.setAllowGravity(false);
        });

        //Phaser.Actions.ScaleXY(grupo.getChildren(), 1 , 1);

        this.tweens.add(
            {
                targets: grupo.getChildren(),
                durartion: 600,
                ease: 'Power1',
                y: 100,
                yoyo: true,
                repeat: -1

            }
        )
    }

    
}
export default Bootloader;