import React, { useState, useEffect } from 'react';


const DrumPad = ({ id, letter, src, handleDisplay }) => {
    const [active, setActive] = useState(false);
    const playSound = () => {
        const sound = document.getElementById(letter);
        sound.currentTime = 0;
        sound.play();
        handleDisplay(id);
        setActive(true);
        setTimeout(() => setActive(false), 100);
    }
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, []);

    const handleKeyPress = (e) => {
        if (e.keyCode === letter.charCodeAt()) {
            playSound();
           
        }
    }

    return (
        <div id="drum-pad" className='grid grid-cols-3 gap-2'>
            <button
            className={`
                drum-pad
                w-20 h-20
                text-2xl 
                rounded
                cursor-pointer
                transition-colors duration-100 ease-in-out
                ${active 
                  ? 'bg-teal-700 text-white' 
                  : 'bg-teal-400 text-gray-300 hover:bg-teal-600'
                }
              `}
                
                id={id}
                onClick={playSound}
                >
                {letter}
                <audio className='clip' id={letter} src={src} ></audio>
            </button>

        </div>
    )
}



export default DrumPad