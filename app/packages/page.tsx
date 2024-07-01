import Slider from '@/components/Slider'
import { CuratedPackages, Destinations, Treks, UpcomingTours } from '@/constants'
import React from 'react'

function Packages() {
  return (
   <main className='pl-4 md:pl-6 flex flex-col'>
        <section className='flex flex-col py-12 md:py-[76px] gap-4 md:gap-9'>
            <h2 className='text-secondary-oncontainer headlines md:displays lg:displaym'>Upcoming Tours</h2>
            <Slider items={UpcomingTours}/>
        </section>
        <section className='flex flex-col py-12 md:py-[76px] gap-4 md:gap-9'>
            <h2 className='text-secondary-oncontainer headlines md:displays lg:displaym'>Destinations</h2>
            <Slider items={Destinations}/>
        </section>
        <section className='flex flex-col py-12 md:py-[76px] gap-4 md:gap-9'>
            <h2 className='text-secondary-oncontainer headlines md:displays lg:displaym pr-4'>Curated Packages For the Explorer in You!</h2>
            <Slider items={CuratedPackages}/>
        </section>
        <section className='flex flex-col py-12 md:py-[76px] gap-4 md:gap-9'>
            <h2 className='text-secondary-oncontainer headlines md:displays lg:displaym'>Trek Expeditions</h2>
            <Slider items={Treks}/>
        </section>
   </main>
  )
}

export default Packages