import React from 'react';
import list from '../data/list.json';
import Cards from './Cards';

function Course() {
    console.log(list);
    return (
    <>
        <div className='py-32 max-w-screen-2xl container mx-auto md:px-18 px-4'> 
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-2xl font-semibold md:text-4xl'>From Bestsellers to Classics: <span className='text-pink-600'>Everything is here</span></h1>
                <p className='mt-12 text-center'>Welcome to our literary oasis, where every book opens a new world of adventure, inspiration, and knowledge. Our library section is more than just a collection; it's a carefully curated treasure trove of captivating stories, timeless classics, and hidden gems waiting to be discovered. Whether you're a voracious reader or a casual explorer, you'll find something to ignite your passion for reading. Dive into a diverse range of genres, from thrilling mysteries and heartwarming romances to thought-provoking non-fiction and enchanting fantasies. With our handpicked selections and latest releases, your next unforgettable reading experience is just a click away. Explore, enjoy, and let the pages turn themselves into your next great adventure!</p>
            </div>
            <div className='grid  sm:grid-cols-2 md:grid-cols-4 gap-2'>
                {list.map((item)=>(
                    // console.log(item);
                    <Cards item = {item} key = {item.id} />
                ))}
            </div>
        </div>
    </>
  );
}

export default Course
