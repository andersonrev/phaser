
class Gameover extends Phaser.Scene {
    constructor() {
        super({key: 'Gameover'});
    }

    init(data) {
        console.log('Scene: Gameover');
        this.data.set('puntos', data);
    }

    create() {

        this.add.text(120, 120, 'GAME OVER', {
            color: '#fff',
            fontSize: 50
        });

        this.add.text(120, 160, this.data.get('puntos'), {
            color: '#fff',
            fontSize: 50
        });

        this.input.on('pointerdown', () => {
            this.scene.start('Bootloader');
        })
    }

    update(time, delta) {

    }
}

export default Gameover;
