import React, { useState } from 'react';
import DrumPad from './DrumPad'

const drumPads = [
    {
        id: 'Heater 1',
        letter: 'Q',
        src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
    },
    {
        id: 'Heater 2',
        letter: 'W',
        src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
    },
    {
        id: 'Heater 3',
        letter: 'E',
        src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
    },
    {
        id: 'Heater 4',
        letter: 'A',
        src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
    },
    {
        id: 'Clap',
        letter: 'S',
        src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
    },
    {
        id: 'Open-HH',
        letter: 'D',
        src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
    },
    {
        id: 'Kick-n\'-Hat',
        letter: 'Z',
        src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',

    },
    {
        id: 'Kick',
        letter: 'X',
        src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
    },
    {
        id: 'Closed-HH',
        letter: 'C',
        src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3',
    },
];


const DrumMachine = () => {
    const [display, setDisplay] = useState('');
    const [power, setPower] = useState(true);
    const [volume, setVolume] = useState(50);
    const handleDisplay = (id) => {
        setDisplay(id);
    }

    const togglePower = () => {
        setPower(!power);
        setDisplay(power ? 'Power OFF' : 'Power ON');
    }

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
        setDisplay(`Volume: ${e.target.value}`);
    }

    return (
        <div id='drum-machine'
            className='grid xs:grid-rows-2  sm:grid-cols-2  lg:w-6/12 sm:w-11/12 xs:w-11/12  justify-center items-center h-screen m-auto '
        >
            <div className="pad-bank grid grid-cols-3 gap-4 w-11/12 m-auto ">
                {drumPads.map((pad) => (
                    <DrumPad
                        key={pad.id}
                        id={pad.id}
                        letter={pad.letter}
                        src={pad.src}
                        handleDisplay={handleDisplay}
                        power={power}
                        volume={volume/100}
                    />
                ))}
            </div>
            <div className='grid grid-rows-3 justify-items-center '>
                <div className='power grid-rows-2 mb-5'>
                    <div className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 row">Power</div>
                    <label className="relative inline-flex items-center cursor-pointer row">
                        <input type="checkbox"
                            className="sr-only peer"
                            checked={power}
                            onChange={togglePower}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                        </div>
                    </label>
                </div>

                <div id="display" className="rounded w-4/5 h-10 bg-teal-400 text-center content-center">{display}</div>

                <div className='volume grid-rows-2'>
                    <div className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 row text-center">Volume</div>
                    <input
                        type="range"
                        id="volume"
                        name="volume"
                        min="0"
                        max="100"
                        step="10"
                        value={volume}
                        onChange={handleVolumeChange}
                    />
                </div>
                

            </div>

        </div >
    )
}

export default DrumMachine