import { Carousel } from "flowbite-react";

function SlideContent() {
  return (
<div>
  
  
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
      
      <p>Welcome to</p>
      <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold mb-4">
         Swimmer Land
      </h1>
      <img className="w-[70px]" src="https://gnodesign.com/templates/swimmerland/images/shapes/wave-blue.svg" alt="" />
      <p>the place where you belongs to be young</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Discover Now
      </button>
    </div>
    </div>
  );
}

export function CarouselComponent() {
  return (
    <Carousel slideInterval={3000} className="h-[100vh]">
      <div className="relative h-full image-overlay">
        <img
          src="https://gnodesign.com/templates/swimmerland/images/img/slider-bg.jpg"
          alt="First slide"
          className="object-cover w-full h-full"
        />
        <SlideContent />
      </div>
      <div className="relative h-full image-overlay">
        <img
          src="https://gnodesign.com/templates/swimmerland/images/img/slider-bg2.jpg"
          alt="Second slide"
          className="object-cover w-full h-full"
        />
        <SlideContent />
      </div>
      <div className="relative h-full image-overlay">
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmdnM284Nm9lbno1OTRhanMwYmY2MmJ0M3phMDNjZXp1MTdsbnNvbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYJDC5MmoTU9amI/giphy.webp"
          alt="Third slide"
          className="object-cover w-full h-full"
        />
        <SlideContent />
      </div>
    </Carousel>
  );
}