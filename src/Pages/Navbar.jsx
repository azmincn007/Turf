import React, { useState, useRef, useEffect } from 'react';
import wavemenu from '../assets/wa.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Accordion } from 'flowbite-react';
import '../Styles/Accordian.css'
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsDrawerOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerRef]);

  return (
    <div className='navbar p-4 relative'>
      <div className="flex justify-between w-[70%] mx-auto items-center">
        <div>
          <img src="https://gnodesign.com/templates/swimmerland/images/logo.svg" className='w-full h-[30px]' alt="" />
        </div>
        <div onClick={toggleDrawer} className="cursor-pointer">
          <img className='w-[30px] h-[30px]' src={wavemenu} alt="" />
        </div>
      </div>

      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              ref={drawerRef}
              className="absolute top-0 right-0 h-screen w-64 bg-white shadow-lg z-50 overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <div className=" h-full flex flex-col navbar">
                <div className="flex flex-col items-center mb-4">
                  <h2 className="text-xl font-bold text-white px-2 py-1">Menu</h2>
                  <img className="w-[70px]" src="https://gnodesign.com/templates/swimmerland/images/shapes/wave-blue.svg" alt="" />
                </div>
                <Accordion className="flex-grow accordian">
                  <Accordion.Panel>
                    <Accordion.Title >Home</Accordion.Title>
                    <Accordion.Content style={{backgroundColor:' rgba(15, 83, 108, 0.55)', padding:'0px'}}>
                      <ul>
                      <li>
  <Link to="/signup" className="text-gray-700 hover:text-blue-500">Signup</Link>
  <div className='h-[1px] w-full bg-white'></div>
</li>
<li>
  <Link to="/login" className="text-gray-700 hover:text-blue-500">Login</Link>
</li>
                      </ul>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>About</Accordion.Title>
                    <Accordion.Content>
                      <ul>
                        <li><a href="#" className="text-gray-700 hover:text-blue-500">Our Story</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-500">Team</a></li>
                      </ul>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>Awards</Accordion.Title>
                    <Accordion.Content>
                      <ul>
                        <li><a href="#" className="text-gray-700 hover:text-blue-500">Recent Awards</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-500">Past Achievements</a></li>
                      </ul>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;