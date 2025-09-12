import phaser from '../lib/phaser.js'
import { BATTLE_BACKGROUND_ASSET_KEYS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS, BATTLE_ASSET_KEYS } from '../assets/asset-keys.js';
import { SCENE_KEYS } from './scene-keys.js';

class Preload extends phaser.Scene {
    constructor() {
        super({
            key: SCENE_KEYS.preload_scene,
            active: true,
        });
        console.log(SCENE_KEYS.preload_scene);
    }
    preload() {
        console.log('preloading scene...');
        const MonsterTamerPath = 'assets/images/monster-tamer/';
        const KennyAssetPath = 'assets/images/kennys-assets/'

        //background assets
        this.load.image(
            BATTLE_BACKGROUND_ASSET_KEYS.SUNKEN_RUINS,
            MonsterTamerPath + 'battle-backgrounds/sunken-ruins.png'
        );
        //health bar assets
        this.load.image(
            BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND,
            KennyAssetPath + 'ui-space-expansion/custom-ui.png'
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.RIGHT_CAP,
            KennyAssetPath + 'ui-space-expansion/barHorizontal_green_right.png'
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.LEFT_CAP,
            KennyAssetPath + 'ui-space-expansion/barHorizontal_green_left.png'
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.MIDDLE,
            KennyAssetPath + 'ui-space-expansion/barHorizontal_green_mid.png'
        );
        //monster assets
        this.load.image(
            MONSTER_ASSET_KEYS.CARNODUSK,
            MonsterTamerPath + 'monsters/carnodusk.png'
        );
        this.load.image(
            MONSTER_ASSET_KEYS.IGUANIGNITE,
            MonsterTamerPath + 'ui-space-expansion/iguanignite.png'
        );
    }
    create() {
        console.log('creating scene...');
        this.add.image(0, 0, BATTLE_BACKGROUND_ASSET_KEYS.SUNKEN_RUINS).setOrigin(0);
    }
}

export default Preload;