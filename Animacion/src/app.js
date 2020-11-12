const config = {
    width: 300,
    height: 200,
    parent: 'container',
    pixelArt: true,
    scene: {
        preload,
        create
    }
}

new Phaser.Game(config);

function preload() {
    console.log('Preload');

    /*  Forma 1*/
    // this.load.spritesheet("evil_tomato", "../assets/evil_tomato.png", {
    //     frameWidth: 16,
    //     frameHeight: 25
    // });

    /* Forma 2*/
    //this.load.atlas("evil_tomato", "../assets/evil_tomato.png", "../assets/evil_tomato.json");
    /* Forma 3*/
    this.load.atlas("tomato_atlas", "../assets/evil_tomato.png", "../assets/evil_tomato.json");
    this.load.json('evil_tomato_anim','../assets/evil_tomato_anim.json');


}

function create() {
    console.log('Create');

 /*Forma 1 y 2 */
   // //this.tomato = this.add.sprite(100, 100, "evil_tomato",1);
   // this.tomato = this.add.sprite(100, 100, "evil_tomato").setScale(2);

    /*Forma 3 */
    this.tomato = this.add.sprite(100,100,"tomato_atlas").setScale(2);
    this.dataAnim = this.cache.json.get('evil_tomato_anim');
  

    // Para hacer animacion.
    // console.log(this.anims.generateFrameNumbers('evil_tomato', {
    //     frames: [1, 2, 3, 4, 5, 6, 7, 8]
    // }));

    /* FORMA 1 */
    // this.anims.create({
    //     key: 'tomato_walk',
    //     frames: this.anims.generateFrameNumbers('evil_tomato', {
    //         // frames: [1, 2, 3, 4, 5, 6, 7, 8]
    //         start: 1,
    //         end: 8
    //     }),
    //     repeat: -1,
    //     frameRate: 10
    // });

    /* FOrma dos: Cuando se usa atlas se debe cargar el nombre no por frames*/
    // this.anims.create({
    //     key: 'tomato_walk',
    //     frames: this.anims.generateFrameNames('evil_tomato', {
    //         prefix: 'evil_tomato_',
    //         suffix: '.png',
    //         start: 1,
    //         end: 8
    //     }),
    //     repeat: -1,
    //     frameRate: 10
    // });

    /* FORMA TRES: forma modular*/
    this.anims.fromJSON(this.dataAnim);





    // this.anims.create({
    //     key: 'tomato_walk',
    //     frames: this.anims.generateFrameNumbers('evil_tomato', {
    //         // frames: [1, 2, 3, 4, 5, 6, 7, 8]
    //         start: 1,
    //         end: 8
    //     }),
    //     repeat: -1,
    //     frameRate: 10
    // });


    /*Forma 1 - 2 */
    //this.tomato.anims.play('tomato_walk');

    /* Forma 3*/
    this.tomato.anims.play('tomato_atlas_walk');




    // La animacion se puede pausar de la siguiente manera:
    /*
    this.tomato.anims.pause();
    this.tomato.anims.resume();
    this.tomato.anims.stop();
    */

}


