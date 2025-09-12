import phaser from '../lib/phaser.js'
import { SCENE_KEYS } from './scene-keys.js';

class Preload extends phaser.Scene {
    constructor() {
        super({
            key: SCENE_KEYS.preload_scene,
        });
        console.log(SCENE_KEYS.preload_scene);
    }
}

export default Preload;