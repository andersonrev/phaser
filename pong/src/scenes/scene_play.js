
import Palas from '../gameObjects/palas.js';
export default class Scene_play extends Phaser.Scene {

    constructor() {
        super({ key: "Scene_play" });
    }

    create() {
        let center_height = this.sys.game.config.height / 2;
        let center_wigth = this.sys.game.config.width / 2;

        // Separador
        this.add.image(center_wigth, center_height, "separador");
        // palas
        this.izquierda = new Palas(this, 30, center_height, 'izquierda');
        this.derecha = new Palas(this, this.sys.game.config.width - 30, center_height, 'derecha');
        //this.izquierda = this.add.image(30, center_height, "izquierda");
        //this.derecha = this.add.image(center_wigth*2-30, center_height, "derecha");

        // bola

        this.physics.world.setBoundsCollision(false, false, true, true); // colision unicamente arriba y abajo
        this.ball = this.physics.add.image(center_wigth, center_height, "ball");
        this.ball.setCollideWorldBounds(true);// Para que choque con las paredes.
        this.ball.setBounce(1);//revote a la misma velocidad con la que choco 
        this.ball.setVelocityX(-180);

        // Fisicas
        this.physics.add.collider(this.ball, this.izquierda, this.chocaPala, null, this);
        this.physics.add.collider(this.ball, this.derecha, this.chocaPala, null, this);

        // CONTROLES
        // Pala Derecha
        this.cursor = this.input.keyboard.createCursorKeys();

        //Pala izquierda
        this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    }
    update() {


        if (this.ball.x < 0 || this.ball.x > this.sys.game.config.width) {
            // this.ball.setX(this.sys.game.config.width/2);
            // this.ball.setY(this.sys.game.config.height/2);
            this.ball.setPosition(this.sys.game.config.width / 2, this.sys.game.config.height / 2)

        }
        // Control de las palas
        // Derecha
        if (this.cursor.down.isDown){
            this.derecha.body.setVelocityY(300);
        }else if(this.cursor.up.isDown){
            this.derecha.body.setVelocityY(-300)
        }else {
            this.derecha.body.setVelocityY(0);
        }


        // Izquierda
        if(this.cursor_S.isDown){
            this.izquierda.body.setVelocityY(300)
        }else if(this.cursor_W.isDown){
            this.izquierda.body.setVelocityY(-300);
        }else {
            this.izquierda.body.setVelocityY(0);
        }
    }

    chocaPala() {
        this.ball.setVelocityY(Phaser.Math.Between(-120, 120));
    }
}
