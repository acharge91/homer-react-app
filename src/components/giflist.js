import React from 'react';

import Gif from './gif.js';


const Giflist = ({gifs, selectGif}) => {
  return (
    <div className='gif-list'>
      {gifs.map(({ id }) => <Gif id={id} key={id} selectGif={selectGif} />)}
    </div>
  );
};


export default Giflist;
