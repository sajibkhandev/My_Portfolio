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

   
   <Section className='bg-third'>
    <Container>
      <div className='-translate-y-[120px]'>
      <h2 className='text-text50 text-black font-normal font-robo text-center'>ABOUT ME</h2>
      <p className='w-w806 text-center mx-auto text-lg text-black font-robo font-normal pt-7'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      </div>
      <Flex className='-translate-y-[70px]'>
        <div className='w-1/2 flex items-center'>
        <Image src={aboutImage} />
        </div>

        <div className='w-1/2'>
        <Flex className=' justify-between'>
        <div className='bg-four rounded-lg w-[270px] h-[150px]'>
        <Education  className="flex justify-center mx-auto pt-4 w-[20px] h-[20px]"/>
        <h3 className='text-black text-xl font-robo font-medium text-center pt-6'>Experience</h3>
        <p className='text-five text-base font-robo font-normal text-center pt-2'>2 + years</p>
        <p className='text-five text-base font-robo font-normal text-center '>Frontend Development</p>
       </div>

        <div className='bg-four rounded-lg w-[270px] h-[150px]'>
        <Education  className="flex justify-center mx-auto pt-4 w-[20px] h-[20px]"/>
        <h3 className='text-black text-xl font-robo font-medium text-center pt-6'>Education</h3>
        <p className='text-five text-base font-robo font-normal text-center pt-2'>B.S.c  Bachelors Degree</p>
        <p className='text-five text-base font-robo font-normal text-center '>M.S.c  Masters Degree</p>
       </div>
        </Flex>
        <p className='text-black text-lg font-normal font-robo pt-10 pb-6'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
        <Button text="Contact" className='px-12'/>
        </div>
        
      </Flex>

    </Container>

   </Section>
   
  </>
  )
}
