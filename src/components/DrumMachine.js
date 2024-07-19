import React from 'react'

const DrumMachine = () => {
    return (
        <div id='drum-machine'
            className='flex justify-center items-center w-full h-screen grid-cols-2 gap-5'
        >
            <div className='grid grid-cols-3 gap-2'>

                <button className='rounded w-20 h-20 drum-pad grid-cols-4 bg-teal-400'>Q</button>
                <button className='rounded w-20 h-20 drum-pad grid-cols-4 bg-teal-400'>W</button>
                <button className='rounded w-20 h-20 drum-pad grid-cols-4 bg-teal-400'>E</button>
                <button className='rounded w-20 h-20 drum-pad grid-cols-4 bg-teal-400'>A</button>
                <button className='rounded w-20 h-20 drum-pad grid-cols-4 bg-teal-400'>S</button>
                <button className='rounded w-20 h-20 drum-pad grid-cols-4 bg-teal-400'>D</button>
                <button className='rounded w-20 h-20 drum-pad grid-cols-4 bg-teal-400'>Z</button>
                <button className='rounded w-20 h-20 drum-pad grid-cols-4 bg-teal-400'>X</button>
                <button className='rounded w-20 h-20 drum-pad grid-cols-4 bg-teal-400'>C</button>


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