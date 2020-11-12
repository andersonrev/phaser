import Bootloader from './Bootloader.js';

const config = {
    title: "contenedores",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 500,
        height: 400,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#c7ecee",
    pixelArt: true,
    scene: [
        Bootloader
    ]
};

new Phaser.Game(config);