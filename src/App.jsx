import { useRef, useState } from 'react';

import phaser from './lib/phaser.js'
import { SCENE_KEYS } from './scenes/scene-keys.js'
import Preload from './scenes/preload-scene.js';

function App() {

}

const game = new phaser.Game({
    type: phaser.CANVAS,
    pixelArt: false,
    backgroundColor: "#000000",
    scale: {
        parent: 'game-container',
        width:750,
        height:500,
        mode: phaser.Scale.FIT,
        autoCenter: phaser.Scale.CENTER_BOTH
    },
    scene: [Preload]
    
});

// game.scene.add(SCENE_KEYS.preload_scene, Preload);
// game.scene.start(SCENE_KEYS.preload_scene);

export default App
