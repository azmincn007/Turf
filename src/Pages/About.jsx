import React from 'react';

function About() {
  return (
    <div className="grid grid-cols-12 bg-white ">
      <div className="col-span-4  ">
        <img src="https://gnodesign.com/templates/swimmerland/images/img/about-img.jpg" alt="" />
      </div>
      <div className="col-span-8  p-4 flex  flex-col items-center justify-center ">
      <h1>About us</h1>
      <img className=" w-[70px]" src="https://gnodesign.com/templates/swimmerland/images/shapes/wave-blue.svg" alt="" />
      <p className='w-[70%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, enim? Repudiandae tenetur velit iste animi aliquid commodi, dolor autem ipsa, quam quidem quis voluptate dignissimos nihil mollitia eligendi architecto minus.</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Read More
      </button>
      </div>
    </div>
  );
}

export default About;
