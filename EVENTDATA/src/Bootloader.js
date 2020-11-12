class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/');

        this.registry.set('points',0);
        this.puntos = 0;


    }

    create() {

        this.data.set('vidas', 3)
        this.data.set('monedas', 300);
        this.data.setValue('monedas', 400);

        // remover el atrubto
        //this.data.remove('monedas');

        console.log(this.data.get('monedas'));
        // recuperar todos los atributos
        console.log(this.data.getAll());

        /* ACCEDER A LOS EVENTOS*/

        // this.registry.events.on('cambio', (puntos)=> {
        //     console.log(puntos);
        // });

        // this.registry.events.emit('cambio', 34400)

        /* EVENTO PROPIO DE PHASER*/

        this.registry.events.on('changedata', (parent, key, data)=> {
            if(key === 'points'){
                console.log(data);  
            }
        })

        this.input.on('pointerdown',()=> {
            this.puntos++;
            this.registry.set('points',this.puntos)
        })

    }
}
export default Bootloader;