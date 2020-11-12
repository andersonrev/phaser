const config = {
    wigth: 800,
    heigth: 600,
    parent: "container",
    type: Phaser.CANVAS,
    backgroundColor: '#3925942',
    scene:[SceneA,SceneB,SceneC]
}
new Phaser.Game(config);