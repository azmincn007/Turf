import React from "react";
import { FaUser } from "react-icons/fa";


function AwardsAndEvents() {
  const eventData = [
    {
      id: 1,
      image: "https://gnodesign.com/templates/swimmerland/images/img/blog-post1.jpg",
      heading: "Swimming Competition",
      time: "10:00 AM - 2:00 PM",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },

    {
        id: 1,
        image: "https://gnodesign.com/templates/swimmerland/images/img/blog-post1.jpg",
        heading: "Swimming Competition",
        time: "10:00 AM - 2:00 PM",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      },
   
      
      {
        id: 1,
        image: "https://gnodesign.com/templates/swimmerland/images/img/blog-post1.jpg",
        heading: "Swimming Competition",
        time: "10:00 AM - 2:00 PM",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      },
     
   
  
  ];

  return (
    <div className="bg-[#ededed] relative">
      <div className="flowing-shape h-[275px] w-full relative overflow-hidden">
        <div className="absolute inset-0 flex justify-around items-center text-white z-10">
          <div className="awardimg">
            <img src="https://gnodesign.com/templates/swimmerland/images/icons/trophy.svg" alt="" />
            <h3>Awards Won</h3>
            <h3>95</h3>
          </div>
          <div className="awardimg">
            <img src="https://gnodesign.com/templates/swimmerland/images/icons/happy.svg" alt="" />
            <h3>Happy Clients</h3>
            <h3>10000+</h3>
          </div>
          <div className="awardimg">
            <img src="https://gnodesign.com/templates/swimmerland/images/icons/trophy.svg" alt="" />
            <h3>Daily Swimmers</h3>
            <h3>100</h3>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="cardsevents w-[60%] mx-auto relative z-20 -mt-12">
        {eventData.map((event, index) => (
          <div key={event.id} className={`event-card grid grid-cols-12 col-md-12 gap-4 p-8 mb-16 bg-white rounded-lg shadow-[0_3px_8px_rgba(0,0,0,0.24)]`}>
            <div className="col-span-3">
              <img src={event.image} alt={event.heading} className="event-image w-full h-full object-cover" />
            </div>
            <div className="col-span-9 flex flex-col justify-center">
              <h3 className="event-heading text-xl font-bold">{event.heading}</h3>
              <div className="flex gap-4">
                <div className="flex items-center ">
                <FaUser/>
                <p>user</p>
                </div>

                <div className="flex items-center">
                <FaUser/>
                <p>user</p>
                </div>

                <div className="flex items-center">
                <FaUser/>
                <p>user</p>
                </div>
            
            
              </div>
              <p className="event-description mt-2">{event.description}</p>
              
            </div>

           
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center py-8">
        <button className="bg-yellow-500 px-4 py-2 rounded text-white font-bold">Visit blog</button>
      </div>
    </div>
  );
}

export default AwardsAndEvents;
