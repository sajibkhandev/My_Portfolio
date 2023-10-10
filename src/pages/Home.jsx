import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Button from '../components/Button'
import Image from '../components/Image'
import aboutImage from '../assets/about.png'
import Flex from '../components/Flex'
import Education from '../components/icons/Education'
import {TiStarburst} from 'react-icons/ti'
import {BsArrowRight } from 'react-icons/bs'

import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'


import ServiceCard from '../components/ServiceCard'
import ProjectSecond from '../components/ProjectSecond'
import { Link } from 'react-router-dom'

export default function Home() {
 
  

  return (
  <>
   <Section className='bg-primary pb-32'>
      {/* <div className='bg-banner h-screen bg-no-repeat bg-center bg-cover'></div> */}
      <Container>
        <h2 className='text-text50 text-black font-pop font-semibold pt-32 pb-4 text-center'>HEY, I'M MOHAMMAD SAJIB KHAN</h2>
        <p className='text-center mx-auto w-w725 leading-8  text-lg text-black font-robo font-normal'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        <Button text="View Project " className='flex mx-auto mt-8'/>
      </Container>
    
   </Section>

  
   <Section className='bg-third py-28'>
    <Container>
      {/* <div className='-translate-y-[120px]'></div> */}
      <div className='pb-14'>
      <h2 className='text-text50 text-black font-normal font-robo text-center'>ABOUT ME</h2>
      <p className='w-w806 text-center mx-auto text-lg text-black font-robo font-normal pt-4'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      </div>
      {/* <div className='-translate-y-[70px]'></div> */}
      <Flex >
        <div className='w-1/2 flex items-center'>
        <Image src={aboutImage} />
        </div>

        <div className='w-1/2'>
        <Flex className=' justify-between'>
        <div className='bg-four rounded-lg drop-shadow-lg w-[270px] h-[150px]'>
        <Education  className="flex justify-center mx-auto pt-4 w-[20px] h-[20px]"/>
        <h3 className='text-black text-xl font-robo font-medium text-center pt-6'>Experience</h3>
        <p className='text-five text-base font-robo font-normal text-center pt-2'>2 + years</p>
        <p className='text-five text-base font-robo font-normal text-center '>Frontend Development</p>
       </div>

        <div className='bg-four rounded-lg drop-shadow-lg w-[270px] h-[150px]'>
        <Education  className="flex justify-center mx-auto pt-4 w-[20px] h-[20px]"/>
        <h3 className='text-black text-xl font-robo font-medium text-center pt-6'>Education</h3>
        <p className='text-five text-base font-robo font-normal text-center pt-2'>B.S.c  Bachelors Degree</p>
        <p className='text-five text-base font-robo font-normal text-center '>M.S.c  Masters Degree</p>
       </div>
        </Flex>
        <p className='text-black text-lg font-normal font-robo pt-10 pb-8'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
        <Button text="Download CV" className='px-12'/>
        </div>
        
      </Flex>

    </Container>

   </Section>



   <Section className='bg-third pt-5 pb-16'>
    <Container>
      <h2 className='text-black text-text50 font-medium font-robo pb-3 text-center'>Skills</h2>
      <p className='text-black text-lg font-normal font-robo text-center'>My technical level</p>

      <Flex className='justify-evenly'>
        <div className='w-[430px] h-[280px] rounded-xl drop-shadow-2xl bg-four mt-16'>
          <h4 className='pt-8 pb-8 text-center text-xl text-black font-robo font-normal'>Frontend developer</h4>

          <Flex className='flex-wrap '>

          <Flex className='gap-x-3 pb-4 pl-12 pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>HTML</h5>
            <p className='text-xs text-five font-normal  font-robo' >Experienced</p>
          </div>
          </Flex>

          <Flex className='gap-x-3 pb-4 pl-12 pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>Tailwind</h5>
            <p className='text-xs text-five font-normal  font-robo' >Basic</p>
          </div>
          </Flex>
          <Flex className='gap-x-3 pb-4 pl-12 pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>Css</h5>
            <p className='text-xs text-five font-normal  font-robo' >Experienced</p>
          </div>
          </Flex>
          <Flex className='gap-x-3 pb-4 pl-12 pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>JavaScript</h5>
            <p className='text-xs text-five font-normal  font-robo' >Basic</p>
          </div>
          </Flex>
          <Flex className='gap-x-3 pb-4 pl-12 pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>Bootstrap</h5>
            <p className='text-xs text-five font-normal  font-robo' >Experienced</p>
          </div>
          </Flex>
          <Flex className='gap-x-3 pb-4 pl-12 pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>Recat</h5>
            <p className='text-xs text-five font-normal  font-robo' >Intermediate</p>
          </div>
          </Flex>



          </Flex>

        </div>
        <div className='w-[430px] h-[280px] rounded-xl drop-shadow-2xl bg-four mt-16'>
          <h4 className='pt-8 pb-8 text-center text-xl text-black font-robo font-normal'>Backend developer</h4>

          <Flex className='flex-wrap '>

          <Flex className='gap-x-3 pb-4 pl-12 pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>Node</h5>
            <p className='text-xs text-five font-normal  font-robo' >Intermediate</p>
          </div>
          </Flex>

          <Flex className='gap-x-3 pb-4 pl-12 pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>Express</h5>
            <p className='text-xs text-five font-normal  font-robo' >Basic</p>
          </div>
          </Flex>
          <Flex className='gap-x-3 pb-4 pl-12 pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>MongDB</h5>
            <p className='text-xs text-five font-normal  font-robo' >Intermediate</p>
          </div>
          </Flex>
          <Flex className='gap-x-3 pb-4 pl-12 pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>Git</h5>
            <p className='text-xs text-five font-normal  font-robo' >Experienced</p>
          </div>
          </Flex>
          <Flex className='gap-x-3 pb-4 pl-12 pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>Firebase</h5>
            <p className='text-xs text-five font-normal  font-robo' >Intermediate</p>
          </div>
          </Flex>
          <Flex className='gap-x-3 pb-4 pl-12 pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>SQL</h5>
            <p className='text-xs text-five font-normal  font-robo' >Intermediate</p>
          </div>
          </Flex>



          </Flex>

        </div>
      </Flex>
    </Container>

   </Section>
   

   <Section className='bg-third py-20'>
    <Container>
      <h2 className='text-black text-text50 font-semibold font-robo pb-3 text-center'>PROJECTS</h2>
      <p className=' w-[780px]  mx-auto text-black text-lg font-normal font-robo  text-center'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>

      <Flex className='justify-between items-center pt-5 group/project1'>
        <Image src={project1}/>
        <div>
        <h3 className='group/project1 w-w412 text-black text-text45 font-medium font-robo pb-8 text-center pt-12'>TolksME is a successful Open-Source project that I created</h3>

      <Link className='relative group/project1'>
      <div className=' flex justify-center items-center gap-x-3'>
       <p className='z-10 text-lg text-black font-robo font-semibold'>Case Study</p>
        <BsArrowRight className='mt-1 z-10'/>
       </div>
        <div className='group-hover/project1:w-[158px] duration-500 absolute -top-[5px] left-[128px] w-[60px] h-[40px] bg-seven'></div>
      </Link>

        </div>
      </Flex>
      {/* Second Project Start */}

      <Flex className='justify-between items-center pt-36 group/project2 '>
      <Image src={project2}/>
        <div>
        <h3 className='group/project2 w-w412 text-black text-text45 font-medium font-robo pb-8 text-center pt-12'>TolksME is a successful Open-Source project that I created</h3>

      <Link className='relative group/project2'>
      <div className=' flex justify-center items-center gap-x-3'>
       <p className='z-10 text-lg text-black font-robo font-semibold'>Case Study</p>
        <BsArrowRight className='mt-1 z-10'/>
       </div>
        <div className='group-hover/project2:w-[158px] duration-500 absolute -top-[5px] left-[128px] w-[60px] h-[40px] bg-seven'></div>
      </Link>

        </div>
      </Flex>
      
      {/* Second Project end */}
      {/* Event to Event Project start*/}
       <ProjectSecond/>
      {/* Event to Event Project start*/}

    </Container>
   </Section>
   


   <Section className='bg-third pt-14 pb-10'>
    <Container>
      <h2 className='text-text50 text-black font-medium font-robo text-center pb-3'>Services</h2>
      <p className='w-w833 text-center mx-auto text-lg text-black font-robo font-normal pb-20'>Our consultants have years of experience on the in success. ​Through the provision of our services. Find the service we provide</p>
      <Flex className='justify-between'>
        <ServiceCard heading='E-Commerce' para='Development'/>
        <ServiceCard heading='Social Media' para='Development'/>
        <ServiceCard heading='Corporate' para='Development'/>
        <ServiceCard heading='Personal' para='Development'/>
      </Flex>
    </Container>
   </Section>



   <Section className='bg-third py-24'>
    <Container>
      <h2 className='text-text50 text-black font-medium font-robo text-center pb-5'>CONTACT</h2>
      <p className='w-w680 text-center mx-auto text-lg text-black font-robo font-normal pb-14'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      <Flex className='justify-between'>
        <h3 className='w-w412 text-black text-text45 font-medium font-robo pb-3 text-center pt-12'>Find clients easily on LinkedIn without any technical skills</h3>
        <div className='w-[570px] h-[470px] bg-four rounded-2xl border-white border-2  '>
         <div className='py-10 px-14'>
         <form action="">
            <div>
            <label htmlFor="name" className='text-lg text-five font-medium font-robo pb-1.5 block'>Name: </label>
            <input id="name" type="text" className='w-full bg-third rounded placeholder:text-six placeholder:text-base placeholder:font-robo placeholder:font-normal py-2 px-6 mb-3' placeholder='Enter Your Name:'/>
            </div>
            <div>
            <label htmlFor="email" className='text-lg text-five font-medium font-robo pb-1.5 block'>Email: </label>
            <input id="email" type="text" className='w-full bg-third rounded placeholder:text-six placeholder:text-base placeholder:font-robo placeholder:font-normal py-2 px-6 mb-3' placeholder='Enter Your Email:'/>
            </div>
            <div>
            <label htmlFor="message" className='text-lg text-five font-medium font-robo pb-1.5 block'>Messages: </label>
            <textarea id="message" type="text" className='w-full h-[110px] bg-third rounded placeholder:text-six placeholder:text-base placeholder:font-robo placeholder:font-normal py-2 px-6 mb-3' placeholder='Enter Your Messages:'/>
            </div>
            <Button text="Message" className='flex mx-auto mt-2 py-2' />
            
          </form>
         </div>
         
        </div>
        
        
      </Flex>
    </Container>

   </Section>
   


   
   
  </>
  )
}
