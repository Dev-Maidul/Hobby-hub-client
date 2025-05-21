import React from 'react';
import { Fade } from 'react-awesome-reveal';


const Carosel = () => {
    return (
      <Fade cascade damping={0.1}>
        
  <div className='py-12'>
            <div className="carousel w-full rounded-2xl">
  <div id="item1" className="carousel-item w-full">
    <img
      
      src="https://i.ibb.co/0Rq5Pm36/Black-Simple-Hobby-To-Business-Youtube-Thumbnail-1.png"
      className="w-full h-[600px]" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://i.ibb.co/hxLj4tYJ/Black-Simple-Hobby-To-Business-Youtube-Thumbnail.png"
      className="w-full h-[600px]" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://i.ibb.co/VcDR8Rcg/Green-Grey-and-Brown-Typography-Illustrated-Plant-Quotes-Instagram-Post.png"
      className="w-full h-[600px]" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://i.ibb.co/hxLj4tYJ/Black-Simple-Hobby-To-Business-Youtube-Thumbnail.png"
      className="w-full h-[600px]" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
</Fade>
        
    );
};

export default Carosel;