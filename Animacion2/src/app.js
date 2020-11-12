const config = {
    width: 300,
    height: 200,
    parent: 'container',
    scene: {
        preload,
        create
    }
};

new Phaser.Game(config);


function preload(){
    console.log('Preload');
}
function create(){
    console.log('create');

}