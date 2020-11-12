import Bootloader from './Bootloader.js';

const config = {
    title: "timeline",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 600,
        height: 400,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#f9ca24",
    pixelArt: true,
    scene: [
        Bootloader
    ]
};

new Phaser.Game(config);