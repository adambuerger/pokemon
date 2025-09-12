import { useRef, useState } from 'react';

import phaser from './lib/phaser.js'
import { SCENE_KEYS } from './scenes/scene-keys.js'
import Preload from './scenes/preload-scene.js';

function App() {

}

const game = new phaser.Game({
    parent: 'game-container'
});

game.scene.add(SCENE_KEYS.preload_scene, Preload);

export default App
