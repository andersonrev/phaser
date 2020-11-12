
class UI extends Phaser.Scene {
    constructor() {
        super({ key: 'UI' });
    }

    init() {
        console.log('Scene: UI');
    }

    create() {
        this.add.text(20, 20, 'Puntos', {
            color: '#fff',
            fontSize: 50
        });

        this.puntos = this.add.text(240, 20, '0', {
            color: '#fff',
            fontSize: 50
        });

        /** Segunda FOrma con eventos */

        this.registry.events.on('puntos', (puntos) => {
            this.puntos.setText(puntos)

        })

        /** Tercera forma */
        // this.registry.events.on('changedata', (parent, key, data) => {

        //     if(key === 'puntos'){
        //         this.puntos.setText(data)
        //     }
        // });

    }

    /* Primara forma con funcion */
    addPoints(puntos) {
        this.puntos.setText(puntos)
    }

    update(time, delta) {

    }
}

export default UI;
