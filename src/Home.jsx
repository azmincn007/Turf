import React from 'react'
import {  CarouselComponent } from './Pages/Carousal'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import TrainingCourse from './Pages/TrainingCourse'
import AwardsAndEvents from './Pages/AwardsAndEvents'
import PricingPlans from './Pages/PricingPlans'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
   <CarouselComponent/>
  <About/>
  <Gallery/>
  <TrainingCourse/>
  <AwardsAndEvents/>
  <PricingPlans/>
  <Footer/>
    </div>
  )
}

export default Home
