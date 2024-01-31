import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Random = () => {
  const [gif, setGif] = useState('');

  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=8ak3BAZV62y3v19D3zY1qoBTTVzKfmZJ`;
  
   const {data}=await axios.get(url);
   const imageSource=data.data.images.downsized_large.url;
   setGif(imageSource);
  }

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run the effect once on mount

  function clickHandler() {
    fetchData();
  }

  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random Gif</h1>
      <img src={gif} alt="Random Gif" width="450" />
      <button onClick={clickHandler} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>
        Generate
      </button>
    </div>
  );
};

export default Random;

