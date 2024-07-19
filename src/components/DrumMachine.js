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
    

    const handleDisplay = (id) => {
        setDisplay(id);
    }
    return (
        <div id='drum-machine'
            className='grid grid-cols-2 w-1/2  justify-center items-center h-screen m-auto '
        >
            <div className="pad-bank grid grid-cols-3 gap-y-4 w-10/12 ">
                {drumPads.map((pad) => (
                    <DrumPad
                        key={pad.id}
                        id={pad.id}
                        letter={pad.letter}
                        src={pad.src}
                        handleDisplay={handleDisplay}
                    />
                ))}
            </div>
            <div className='grid grid-rows-4 justify-items-center'>
                <div className='power grid-rows-2 mb-5'>
                    <div class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 row">Power</div>
                    <label class="relative inline-flex items-center cursor-pointer row">
                        <input type="checkbox" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                        </div>
                    </label>
                </div>

                <div id="display" class="rounded w-full h-10 bg-teal-400 text-center content-center">test</div>

                <div className='volume grid-rows-2'>
                    <div class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 row text-center">Volume</div>
                    <input type="range" id="volume" name="volume" min="0" max="100" />
                </div>
                <div className='bank grid-rows-2 mb-5'>
                    <div class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 row">Bank</div>
                    <label class="relative inline-flex items-center cursor-pointer row">
                        <input type="checkbox" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                        </div>
                    </label>
                </div>

            </div>

        </div >
    )
}

export default DrumMachine