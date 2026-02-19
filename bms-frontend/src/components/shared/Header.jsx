import React from 'react'
import mainlogo from '../../assets/main-icon.png';
import { FaSearch } from 'react-icons/fa';
import { useLocation } from '../../context/LocationContext'
import map from '../../assets/pin.gif';

const Header = () => {
    const { location, loading, error} = useLocation()
  return (
    <div  className = 'w-full text-sm bg-white shadow-md'>
      <div className="px-4 md:px-8"> 
        <div className="max-w-full mx-auto flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
                <img src = {mainlogo} alt="Logo" className="h-8 object-contain cursor-pointer" />
                  <div className="relative">
                <input type="text" placeholder="Search for movies, events, plays, sports and activities" className="border border-gray-300 rounded px-4 py-1.5 w-[400px] text-sm outline-none" />
                <FaSearch className="absolute right-2 top-2.5  text-gray-500" />
            </div>
            </div> 
            <div className="flex items-center space-x-4">
                <div className='flex items-center gap-2 text-sm font-medium cursor-pointer'>
                    {loading && <p className="text-gray-500">Loading location...</p>}
                    {error && <p className="text-red-500">Location unavailable</p>}
                    {location && (
                        <>
                            <img src={map} alt="location" className="w-6 h-6"/>
                            <p>{location}</p>
                        </>
                    )}
                </div>
                <button className="bg-red-500 text-white px-4 py-1.5 rounded text-sm font-medium">
                    Sign in 
                </button>
            </div>
        </div>
      </div>

      <div className = "bg-[#f2f2f2] px-4 md:px-8">
        <div className="max-w-full mx-auto flex justify-between items-center py-2 text-gray-700">
        <div className='flex items-center space-x-6 font-medium'>
            <span className="cursor-pointer hover:text-red-500">Movies</span>
            <span className="cursor-pointer hover:text-red-500">Stream</span>
            <span className="cursor-pointer hover:text-red-500">Movies</span>
            <span className="cursor-pointer hover:text-red-500">Events</span>
            <span className="cursor-pointer hover:text-red-500">Plays</span>
            <span className="cursor-pointer hover:text-red-500">Sports</span>
            <span className="cursor-pointer hover:text-red-500">Activities</span>
        </div>
          <div className='flex items-center space-x-6 text-sm'>
            <span className="cursor-pointer hover:text-red-500">ListYourShow</span>
            <span className="cursor-pointer hover:text-red-500">Cooperates</span>
            <span className="cursor-pointer hover:text-red-500">Offers</span>
            <span className="cursor-pointer hover:text-red-500">Gift cards</span>  
        </div>

        </div>
      </div>
    </div>
  )
}

export default Header
