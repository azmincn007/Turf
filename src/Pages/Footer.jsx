import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className='footer'>
      <div className="footertop">
        <img src="https://gnodesign.com/templates/swimmerland/images/shapes/wave-top-footer.svg" alt="" />
      </div>
      <div className="footerdown ">
        <div className="grid md:grid-cols-12 gap-4 py-4 text-white">
          <div className="md:col-span-4 flex flex-col items-start">
            <img src="https://gnodesign.com/templates/swimmerland/images/logo-white.svg" alt="" className="mb-4 h-[26px]" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type changed</p>
            <div className='flex gap-4'><FaLocationDot/>  <p>New York City, USA</p></div>
            <div className='flex gap-4'><IoCallSharp/><p>(123) 456 789 0012</p></div>
            <div className='flex gap-4'><AiOutlineMail/><p>support@swimmerland.com</p></div>
          </div>
          <div className="md:col-span-2 flex flex-col items-start">
            <h3 className="mb-4">Navigation</h3>
            <p>Home</p>
            <p>About us</p>
            <p>Pages</p>
            <p>Contact</p>
          </div>
          <div className="md:col-span-2 flex flex-col items-start">
            <h3 className="mb-4">Follow us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Linked in</p>
            <p>Google +</p>
          </div>
          <div className="md:col-span-4 flex flex-col items-start">
            <h3 className="mb-4">News Letter</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer