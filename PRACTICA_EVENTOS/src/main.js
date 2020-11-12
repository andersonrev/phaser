import Gameover from './scenes/Gameover.js';
import UI from './scenes/UI.js';
import Bootloader from './Bootloader.js';

const config = {
    title: "practivaEventos",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 600,
        height: 400,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#c7ecee",
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            }
        }
    },
    scene: [Bootloader, UI, Gameover]
};

new Phaser.Game(config);