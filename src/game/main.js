import { Boot } from './scenes/Boot';
import { Game } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { phaser } from './phaser.js';
import { Preloader } from './scenes/Preloader';

// Find out more information about the Game Config at:
// https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config = {
    type: phaser.CANVAS,
    width: 750,
    height: 500,
    parent: 'game-container',
    backgroundColor: '#5865F2',
    scale: { 
        autoCenter: phaser.Scale.CENTER_BOTH,
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
    ]
};

const StartGame = (parent) => {

    return new phaser.Game({ ...config, parent });

}

export default StartGame;
