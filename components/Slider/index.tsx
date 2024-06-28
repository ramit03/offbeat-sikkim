import React, { FC } from 'react'
import { UpcomingTours } from '@/constants'
import Cards from '../Cards'
import { TripDetail } from '@/lib/types'

interface SliderProps {
  items: TripDetail[];
}

const Slider:FC<SliderProps> = ({ items }) => {
  return (
  <div className="carousel carousel-center max-w-full p-1 space-x-4">
  {items.map((tour,index)=>(
    <div className='carousel-item' key={index}>
      <Cards card={tour}/>
    </div>
  ))}
</div>
  )
}

export default Slider