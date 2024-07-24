import React from 'react'

function Cards({item}) {
  // console.log(item);
  const {category, image, price, name, title} = item;
  return (
    <>
      <div className='mt-16 px-4'>
        <div className="hover:scale-105 hover:transition-all hover:ease-in-out hover:duration-500 card bg-base-100 shadow-xl mb-6 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src = {image}
              alt="book_image" className='h-60 w-90' />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="bg-pink-600 text-white text-xs tracking-widest rounded-lg px-2">{category}</div>
            </h2>
            <p className=''>{title}</p>
            <div className="card-actions flex justify-between mt-6">
              <div className="badge badge-outline px-6 py-4">₹ {price}</div>
              <div className="badge badge-outline hover:bg-pink-600 hover:text-white hover:transition-all hover:duration-300 px-4 py-4 hover:scale-95 cursor-pointer">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
