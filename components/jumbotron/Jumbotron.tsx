import React from 'react'
import Header from '../shared/Header'
import HeroContent from './HeroContent'
import Image from 'next/image'
import { siteConfiguration } from '@/config/siteConfig'

const Jumbotron = () => {
    const {jumbotron} = siteConfiguration
  return (
    <div className=' h-fit relative flex flex-col gap-[5%] '>
        <Header />
        <Image src={jumbotron.heroImage} alt='hero-image' className='top-0  bottom-0 z-0 absolute h-full w-full' />
        <div className='bg-gradient absolute z-10 top-0 bottom-0 w-full h-full'>

        </div>
        <HeroContent conference={jumbotron.conference} buttons={jumbotron.heroButtons}  />
    </div>
  )
}

export default Jumbotron