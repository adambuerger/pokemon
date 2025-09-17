import { useRef, useState } from 'react';
import { PhaserGame } from './PhaserGame';
import Sidebar from './Components/Sidebar.jsx'
import './styles/App.css';
import Footer from './Components/Footer.jsx';

const App = () => {

    // The sprite can only be moved in the MainMenu Scene
    const [canMoveSprite, setCanMoveSprite] = useState(true);
    
    //  References to the PhaserGame component (game and scene are exposed)
    const phaserRef = useRef();
    const [spritePosition, setSpritePosition] = useState({ x: 0, y: 0 });

    // Event emitted from the PhaserGame component
    const currentScene = (scene) => {

        setCanMoveSprite(scene.scene.key !== 'MainMenu');
        
    }

    return (
        <div className="app h-100">
            <div className="row">
                <div className="col-3 sidebar">
                    <Sidebar />
                </div>

                <div className="col-9 content">
                    <div className='row'>
                        <PhaserGame ref={phaserRef} currentActiveScene={currentScene}/>
                    </div>
                    <div className="row">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
