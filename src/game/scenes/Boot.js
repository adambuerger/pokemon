import { background_keys, ui_keys } from '../asset_keys.js';
import { phaser } from '../phaser.js';

export class Boot extends phaser.Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.image(background_keys.MAP, 'background/map.png');
        this.load.image(ui_keys.WELCOME, './welcome.png')
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
