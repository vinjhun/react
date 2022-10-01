import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import fetch from 'node-fetch';

const productDetails = {
  id: '',
  title: '',
  description: '',
  image: '',
};

const variants = {
  hidden: { x: '-100%' },
  show: { x: 0, transition: { delayChildren: 0.5 } },
};

const Card = ({ id }) => {
  const [product, setProduct] = useState(productDetails);

  useEffect(() => {
    let isFetched = true;

    const fetchData = async () => {
      const response = await fetch(
        'https://fakestoreapi.com/products/'.concat(id)
      ).then((res) => res.json());

      if (isFetched) {
        setProduct(response);
      }
    };

    fetchData().catch(console.error);

    return () => (isFetched = false);
  }, []);

  return (
    <motion.div variants={variants} initial='hidden' animate='show'>
      <div className='flex min-h-[15vh] max-h-[80vh] flex-col overflow-hidden rounded-md bg-slate-700 text-white shadow-md'>
          {product.image ? (
            <div
              className='rounded-md flex justify-items-stretch items-stretch h-60 shadow-md'
              style={{ clipPath: 'ellipse(14rem 9rem at 50% 38%)' }}
            >
              <img className='object-fit' src={product.image} alt='' />
            </div>
          ) : (
            <div className='rounded-md flex justify-center items-center h-60 animate-pulse'>
              <svg
                className='w-12 h-12 text-gray-200'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 640 512'
              >
                <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
              </svg>
            </div>
          )}
          <div className='card-content flex flex-col justify-evenly p-2'>
            <div
              className={`card-title self-center min-w-[6rem] ${
                !product.title && 'animate-pulse'
              }`}
            >
              {product.title ? (
                <div
                  className='card-title 
                      text-center text-xl font-bold text-slate-100
                      min-h-[4rem] overflow-hidden'
                >
                  {product.title}
                </div>
              ) : (
                <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 mb-2'></div>
              )}
            </div>
            <div
              className={`card-body flex grow flex-col px-2 py-4 ${
                !product.description && 'animate-pulse'
              }`}
            >
              <div className='text-ellipsis'>
                {product.description ? (
                  <p className='text-sm max-h-[10vh] text-ellipsis overflow-hidden break-words'>
                    {product.description}
                  </p>
                ) : (
                  <>
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[10rem] mb-3'></div>
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[12rem] mb-3'></div>
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[11rem] mb-3'></div>
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[10rem]'></div>
                  </>
                )}
              </div>
              {product.description ? (
                <button className='m-2 min-w-[4rem] self-end rounded-full bg-[#A1887F] p-1 text-sm shadow-sm hover:bg-[#BCAAA4] hover:shadow-lg'>
                  More
                </button>
              ) : (
                <div className='m-2 min-w-[4rem] self-end rounded-full bg-[#A1887F] p-1 text-sm shadow-sm hover:bg-[#BCAAA4] hover:shadow-lg'></div>
              )}
            </div>
          </div>
      </div>
    </motion.div>
  );
};

export default Card;
