import React from 'react'
import { allMovies } from '../../utils/constants'
import { languages } from '../../utils/constants'
import MovieCard from './MovieCard'

const MovieList = () => {
  return (
    <div className='w-full md:w-3/4 p-4'>
      <div className='flex flex-wrap gap-2 mb-4'>
        {
            languages.map((lan,i) =>(
                <span key={i} className='border border-gray-200 text-[#f74362] px-3 py-1 rounded hover:bg-gray-100 text-sm cursor-pointer'>
                    {lan}
                </span>
            ))
        }
      </div>

      <div className='flex justify-between items-center bg-white px-6 py-6 rounded mb-6'>
        <h3 className='font-semibold text-xl'>Coming soon</h3>
        <a href='#' className='text-[#f74362] '>
            Explore Upcoming Movies <span className='ml-2'>→</span>
        </a>
      </div>

        <div className='flex flex-wrap gap-4'>
          {
            allMovies.map((movie,i) => (
              <MovieCard key={i} movie={movie} />
            ))
          }
        </div>
    </div>
  )
}

export default MovieList
