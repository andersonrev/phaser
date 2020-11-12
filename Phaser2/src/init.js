const config = {
    width: 320*2,
    height: 180*2,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create, 
        update: update
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity:{
                y:500
            }
        }
    }
}

var game = new Phaser.Game(config);

function preload(){
    this.load.image("pajaro","./assets/bird.png"); // cargar la imagen en la cache de phaser
}
function create() {
    console.log('soy create');

    this.pajaro = this.physics.add.image(80,100,"pajaro");// cargar la imagen
    this.pajaro.setScale(2);
    this.pajaro.flipX = true; // direccion a donde esta viendo.
    this.pajaro.setOrigin(0.5);// cambiar el origen cuando vaya a rotar. 
    // this.pajaro.visible = false;


    /* FISICAS */
    this.pajaro.setCollideWorldBounds(true); // cae pero se queda en el limite
    this.pajaro.setBounce(0.2); // rebote
    //this.pajaro.setAcceleration(10,0); // aumenta la velocidad inicial
    this.pajaro.setVelocity(50,0); // velocidad constante
}
function update(time, delta){
    // detal : en todos los ordenados se muevan igual.
    //console.log(delta);
   // this.pajaro.angle++; // el pajaro gira
   // this.pajaro.x++; // solo cambia de posiscion x simula un movimiento
  
}
