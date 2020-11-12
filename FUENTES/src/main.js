import Bootloader from './Bootloader.js';

const config = {
    title: "fuentes",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 600,
        height: 300,
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