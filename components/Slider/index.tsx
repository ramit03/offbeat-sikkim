import React from 'react'
import { UpComingTours } from '@/constants'
import Cards from '../Cards'

const Slider = () => {
  return (
  
  <div className="carousel carousel-center max-w-full bg-primary-40 p-4 space-x-4">
  {UpComingTours.map((tour,index)=>(
    <div className='carousel-item' key={index}>
      <Cards card={tour}/>
    </div>
  ))}
</div>
  )
}

export default Slider