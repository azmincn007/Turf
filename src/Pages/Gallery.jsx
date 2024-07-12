import { Tabs } from 'flowbite-react';
import React from 'react';

function Gallery() {
  // Sample array of image URLs
  const imageUrls = [
    "https://gnodesign.com/templates/swimmerland/images/img/gallery4.jpg",
    "https://gnodesign.com/templates/swimmerland/images/img/gallery5.jpg",
    "https://gnodesign.com/templates/swimmerland/images/img/gallery6.jpg",
    "https://gnodesign.com/templates/swimmerland/images/img/gallery7.jpg",
    "https://gnodesign.com/templates/swimmerland/images/img/gallery8.jpg",
    "https://gnodesign.com/templates/swimmerland/images/img/gallery9.jpg",
    "https://gnodesign.com/templates/swimmerland/images/img/gallery10.jpg",
    "https://gnodesign.com/templates/swimmerland/images/img/gallery11.jpg",
    "https://gnodesign.com/templates/swimmerland/images/img/gallery12.jpg",
    "https://gnodesign.com/templates/swimmerland/images/img/gallery1.jpg",
    "https://gnodesign.com/templates/swimmerland/images/img/gallery2.jpg",
    "https://gnodesign.com/templates/swimmerland/images/img/gallery3.jpg",
  ];

  return (
    <div className='flex flex-col items-center'>
      <h1>Gallery</h1>
      <img className="w-[70px]" src="https://gnodesign.com/templates/swimmerland/images/shapes/wave-blue.svg" alt="" />
      <div className='Tabs1 py-4'>
        <Tabs aria-label="Pills" variant="pills">
          <Tabs.Item active title="All">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
              {imageUrls.map((imageUrl, index) => (
                <div key={index} className="aspect-w-1 aspect-h-1 w-full">
                  <img 
                    src={imageUrl} 
                    alt={`Image ${index + 1}`} 
                    className="w-full h-[230px] object-cover"
                  />
                </div>
              ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Indoor">
            <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
          </Tabs.Item>
          <Tabs.Item title="Outdoor">
            <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
          </Tabs.Item>
          <Tabs.Item title="Spa">
            <p className="text-sm text-gray-500 dark:text-gray-400">Content 4</p>
          </Tabs.Item>
          <Tabs.Item title="Yoga">
            <p className="text-sm text-gray-500 dark:text-gray-400">Content 5</p>
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
}

export default Gallery;