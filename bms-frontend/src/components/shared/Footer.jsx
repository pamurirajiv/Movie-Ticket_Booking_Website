import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

import bookmyshowlogo from '../../assets/bookMyScreen.png'
const Footer = () => {
  return (
    <div className="bg-[#2b2b2b] text-white py-8">
      <div className="border-t border-gray-600 w-full">
        <div className="flex flex-col items-center py-6">
            <img src={bookmyshowlogo} alt="BookMyShow Logo" className="w-28 mb-4" />
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FaFacebook className='w-8 h-8 p-2 rounded-full bg-gray-700 text-white'/>
            <FaTwitter className='w-8 h-8 p-2 rounded-full bg-gray-700 text-white'/>
            <FaInstagram className='w-8 h-8 p-2 rounded-full bg-gray-700 text-white'/>
            <FaLinkedin className='w-8 h-8 p-2 rounded-full bg-gray-700 text-white'/>
            </div>
        </div>
    </div>
  )
}

export default Footer
