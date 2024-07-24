import React from 'react';
import banner from '../assets/banner.png';

function Banner() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col-reverse md:pr-4 md:flex-row'>
            <div className='w-full md:w-1/2'>
                <div className='space-y-12 mt-12 md:mt-32'>
                    <h1 className='text-4xl font-bold'>Catch the Reading Bug at <span className='text-pink-600'>BookBug!</span></h1>

                    <p className='text-xl'>Dive into our curated selection of bestsellers, new releases, and hidden gems across all genres. From gripping mysteries and heartwarming romances to insightful non-fiction and enchanting fantasies, there's a book for every reader at BookBug.</p>

                    <label className="border-2 border-rose-400 px-2 py-2 rounded-md flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="outline-none dark:bg-slate-900 dark:text-white" placeholder="Enter your email to login" />
                    </label>

                </div>

                <div className='mt-6'>
                    <button className="btn btn-active btn-secondary hover:transition-all hover:duration-200 hover:scale-95 px-10 tracking-wider rounded-lg">Login</button>
                </div>
            </div>
            
            <div className='w-full md:w-1/2 mt-12 md:mt-32'>
                <img src={banner} alt='main_image' />
            </div>
        </div>
    </>
  )
}

export default Banner
