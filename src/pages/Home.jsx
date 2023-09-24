import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Button from '../components/Button'
import Image from '../components/Image'
import aboutImage from '../assets/about.png'
import Flex from '../components/Flex'
import Education from '../components/icons/Education'

export default function Home() {
  return (
  <>
   <Section>
    <div className='bg-banner h-screen bg-no-repeat bg-center bg-cover'>
      <Container>
        <h2 className='text-text50 text-black font-pop font-semibold pt-32 pb-4 text-center'>HEY, I'M MOHAMMAD SAJIB KHAN</h2>
        <p className='text-center mx-auto w-w725  text-lg text-black font-robo font-normal '>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        <Button text="Download CV" className='flex mx-auto mt-8'/>
      </Container>
    </div>
   </Section>

   
   
   
  </>
  )
}
