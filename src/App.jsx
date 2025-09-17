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

    // Event emitted from the PhaserGame component
    const currentScene = (scene) => {

        setCanMoveSprite(scene.scene.key !== 'MainMenu');
        
    }

    return (
        <div className="app">
            <div className="row">
                <div className="col-2 sidebar">
                    <Sidebar />
                </div>
                <div className="col-10 content">
                    <div className='row'>
                        <PhaserGame ref={phaserRef} currentActiveScene={currentScene}/>
                    </div>
                    <div className="row footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
