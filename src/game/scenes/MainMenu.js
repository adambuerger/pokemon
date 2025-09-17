import { EventBus, phaser } from '../phaser.js';
import { background_keys, ui_keys } from '../asset_keys.js';
import '../../styles/fonts.css';

export class MainMenu extends phaser.Scene
{
    logoTween;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(0, 0, background_keys.MAP).setOrigin(0);
        this.add.image(150, 100, ui_keys.WELCOME).setOrigin(0);


        const StartMessage = this.add.text(
            375, 
            350, 
            'Press Start', {
                fontFamily: 'Arial Black', 
                fontSize: 38, 
                color: '#ffffff',
                stroke: '#000000', 
                strokeThickness: 8,
                align: 'center'
            }
        ).setDepth(100).setOrigin(0.5);
        this.tweens.add({
            targets: StartMessage,
            alpha: {from: 1, to: 0.1},
            ease: 'linear',
            duration: 1000,
            repeat: -1,
            yoyo: true
        });
        
        EventBus.emit('current-scene-ready', this);
    }

    changeScene ()
    {
        if (this.logoTween)
        {
            this.logoTween.stop();
            this.logoTween = null;
        }

        this.scene.start('Game');
    }
}
