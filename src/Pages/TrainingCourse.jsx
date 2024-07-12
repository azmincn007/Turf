import React from 'react';
import AwardsAndEvents from './AwardsAndEvents';

function TrainingCourse() {
  return (
    <div className='trainingcourse'>
      <div className='flex flex-col items-center'>
        <h1>Training Course</h1>
        <img className="w-[70px]" src="https://gnodesign.com/templates/swimmerland/images/shapes/wave-blue.svg" alt="" />
      </div>
      
      <div className='w-full py-16'>
        <div className='w-full py-16'>
          <div className='w-[50%] flex justify-between mx-auto smalltrlogo'>
            <div className='flex flex-col items-center'>
              <img src="https://gnodesign.com/templates/swimmerland/images/icons/volleyball.svg" alt="" />
              <h3>Volleyball</h3>
            </div>
            <div className='flex flex-col items-center'>
              <img src="https://gnodesign.com/templates/swimmerland/images/icons/fitness.svg" alt="" />
              <h3>Fitness</h3>
            </div>
          </div>
          
          <div className='w-[80%] flex justify-between items-center mx-auto '>
            <div className='flex flex-col items-center smalltrlogo'>
              <img src="https://gnodesign.com/templates/swimmerland/images/icons/swimming.svg" alt="" />
              <h3>Swimming</h3>
            </div>
            
            <div className='flex justify-center items-center'>
              <img
                src="https://gnodesign.com/templates/swimmerland/images/img/yoga-course.png"
                className='h-[400px] max-w-full'
                alt="Yoga Course"
              />
            </div>
            
            <div className='flex flex-col items-center smalltrlogo'>
              <img src="https://gnodesign.com/templates/swimmerland/images/icons/yoga.svg" alt="" />
              <h3>Yoga</h3>
            </div>
          </div>
        </div>
      </div>
      
     
    </div>
  );
}

export default TrainingCourse;