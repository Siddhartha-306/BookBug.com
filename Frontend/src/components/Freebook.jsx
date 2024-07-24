import React, { useState, useEffect } from 'react';
// import list from '../data/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

// console.log(list);

function Freebook() {

    const [book, setBook] = useState([]);

    useEffect(() => {
      const getBook = async () => {
        try{
            const res = await axios.get("http://localhost:3000/book");
            console.log(res.data);
            setBook(res.data.filter((data)=>data.category === "Free"));
        }
        catch(error){
            console.log(error);
        }
    };
    getBook();
    }, []);

  
    // console.log(filterData);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-12'>
            <div>
                <h1 className='font-semibold text-2xl pb-2'>Freebies Library</h1>
                <h2 className='font-semibold text-lg'>Discover a treasure trove of literary gems without spending a dime!</h2>
                <p>At BookBug, we believe that everyone should have access to the joy of reading. That's why we've curated a special collection of free books just for you. Whether you're a fan of thrilling mysteries, heartwarming romances, or mind-bending sci-fi, our Freebies Library has something to offer every reader.</p>
            </div>

            <div>
                <Slider {...settings}>
                      {book.map((item)=>(
                        <Cards item = {item} key = {item.id} />
                      ))}
                </Slider>
            </div>
        </div>
    </>
  );
}

export default Freebook