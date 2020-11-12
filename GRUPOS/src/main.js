import Bootloader from './Bootloader.js';

const config = {
    title: "grupos",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 640,
        height: 360,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#95afc0",
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            },
            debug: true
        }
    },
    scene: [
        Bootloader
    ]
};

new Phaser.Game(config);