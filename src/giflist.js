import React from 'react';
import Gif from './gif.js'


const Giflist = ({gifs, selectGif}) => {
  console.log()
  return (
    <div className='gif-list'>
      {gifs.map(({ id }) => <Gif id={id} key={id} selectGif={selectGif} />)}
    </div>
  );
};


export default Giflist;
