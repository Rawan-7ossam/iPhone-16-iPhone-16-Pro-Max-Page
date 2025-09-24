import { motion ,AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'



export default function Navbar() {
  const [dropdownBtn, setDropdownBtn] = useState(false)

  const navLinks = [
    "Switch from Android to iPhone",
    "Tech Specs",
  ];

  return (
   
      <>

       <AnimatePresence>
        {dropdownBtn && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setDropdownBtn(false)} // يقفل الناف بار لو ضغطت برا
          />
        )}
      </AnimatePresence>
      
       <motion.div
      animate={{ height: dropdownBtn ? "25vh" : "8vh" }} // بطول الناف بار و اقصره
      transition={{ duration: 0.5, ease: "easeInOut" }}
     
      className={`${
    dropdownBtn ? "bg-[#161617]" : "bg-black/60 backdrop-blur-md"
  } border-b border-b-[#4b4b4b] w-full fixed top-0 right-0 left-0 z-50 overflow-hidden`}
    >
      <div className="navbar shadow-sm justify-between py-0 w-full lg:w-[60%] m-auto relative h-[8vh]">
        {/* اللوجو */}
        <div>
          <h1 className="text-xl text-white font-bold border-0 shadow-none">
            iPhone 16 Pro
          </h1>
        </div>

        {/* قايمة الديسكتوب */}
        <div
          className="navbar-center hidden lg:flex ms-auto text-[12px]"
          style={{ fontFamily: "SF Pro Text" }}
        >
          <ul className="menu menu-horizontal px-1 text-[#cbc9c9] py-0">
            <li><a className="hover:text-white cursor-pointer">Overview</a></li>
            {navLinks.map((link) => (
              <li key={link}>
                <a className="hover:text-white cursor-pointer">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Dropdown للموبايل */}
        <div className="ms-auto relative lg:hidden">
          <button
            onClick={() => setDropdownBtn(!dropdownBtn)}
            className="border-0 shadow-none p-2 rounded cursor-pointer"
          >
            {dropdownBtn ? (
              <ChevronUp className="text-[#b3b3b3]" />
            ) : (
              <ChevronDown className="text-[#b3b3b3]" />
            )}
          </button>
        </div>

        {/* زرار الشراء */}
        <button className="bg-blue-500 rounded-2xl py-1 px-4 font-medium lg:ms-2 text-sm text-center text-white cursor-pointer">
          Buy
        </button>
      </div>

      {/* قايمة الموبايل */}
      <AnimatePresence>
        {dropdownBtn && (
          <motion.ul
            className="flex flex-col ps-3 bg-[#161617] text-[14px] font-[400]  text-[#d0d0d1] space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <li className='text-white'>|{" "} Overview</li>
            {navLinks.map((link, i) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.15 }}
              >
                <a className="hover:text-white cursor-pointer">{link}</a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
      
      
      </>
   
    
   
  )
}
