import React, { useState } from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Button from '../components/Button'
import Image from '../components/Image'
import aboutImage from '../assets/about.png'
import Flex from '../components/Flex'
import Education from '../components/icons/Education'
import {TiStarburst} from 'react-icons/ti'
import {BsArrowRight } from 'react-icons/bs'
import {AiFillLinkedin,AiOutlineTwitter,AiOutlineGithub } from 'react-icons/ai'
import {FaBookOpen,FaYoutube,FaFacebookSquare} from 'react-icons/fa'
import {BiSolidMessageRounded} from 'react-icons/bi'
import {MdWavingHand} from 'react-icons/md'

import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import CV from '../assets/SajibKhanCV .pdf'


import ServiceCard from '../components/ServiceCard'
import ProjectSecond from '../components/ProjectSecond'
import { Link, Link as RouterLink  } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

export default function Home() {

  
  return (
  <>
   <div className=' fixed right-[12px] md:right-[25px] bottom-[16px] md:bottom-[15px] flex justify-center items-center gap-x-1 md:gap-x-4 z-10'>
        <div>
          <button className='bg-four py-1 px-2 md:py-2 md:px-4 rounded-xl font-robo text-xs md:text-sm drop-shadow-2xl flex justify-center items-center gap-x-2'>Chat with Me <MdWavingHand  className='text-yellow-500 md:text-base'/></button>
        </div>
        <div className='bg-secondary rounded-full md:w-[60px] w-[30px] h-[30px] md:h-[60px] flex justify-center items-center drop-shadow-2xl'>
          <BiSolidMessageRounded className='md:text-[27px] text-white'/>
        </div>
      </div>

   <Section className='bg-primary pb-20 md:pb-32 relative' >
      {/* <div className='bg-banner h-screen bg-no-repeat bg-center bg-cover'></div> */}
      <Container>
        <div id="hero">
        <h2 className=' text-[27px] pt-12  md:text-text50  text-4xl text-black font-pop font-semibold md:pt-28 md:pb-7 pb-4 text-center'>HEY, I'M MOHAMMAD SAJIB KHAN</h2>
        <p className='text-center mx-auto px-5 md:w-w725 md:leading-9 text-sm  md:text-lg text-black font-robo font-normal'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
       
        
        <ScrollLink to="project2" spy={true} smooth={true} offset={50} duration={1200} ><Button text="View Project" className='flex mx-auto mt-8 '/></ScrollLink>
        </div>
      </Container>
      <div className=' bg-third h-[120px] w-[10px] md:h-[270px] md:w-[40px] absolute left-0 top-[226px] md:top-[90px] flex flex-col justify-between items-center p-3 md:p-7 drop-shadow-xl '>
        <Link to="https://www.linkedin.com/in/md-sajib-khan-888a19287/">
        <AiFillLinkedin className='md:text-[34px]'/>
        </Link>

        <Link to='https://github.com/sajibkhandev'>
        <AiOutlineGithub className='md:text-[34px]'/>
        </Link>

        <Link>
        <FaYoutube className='md:text-[30px]'/>
        </Link>

        <Link to='https://twitter.com/sajib562341'>
        <AiOutlineTwitter className='md:text-[34px]'/>
        </Link>
        
        <Link to="https://www.facebook.com/mdsajib.mia.3152/">
        <FaFacebookSquare className='text-sm md:text-[30px]'/>
        </Link>
      </div>
   </Section>

  
   <Section className='bg-third py-14 md:py-28' >
    <Container >
      {/* <div className='-translate-y-[120px]'></div> */}
      <div id="about">
      <div className='pb-14' >
      <h2 className=' text-3xl md:text-text50 text-black font-normal font-robo text-center'>ABOUT ME</h2>
      <p className='md:w-w806 text-center mx-auto text-sm md:text-lg text-black font-robo font-normal px-4 pt-4'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      </div>
      {/* <div className='-translate-y-[70px]'></div> */}
      <Flex >
        <div className='w-1/2 hidden md:block flex items-center'>
        <Image src={aboutImage}  className=''/>
        </div>

        <div className=' w-full md:w-1/2'>
        <Flex className=' justify-between gap-x-2 px-4'>
        <div className='bg-four rounded-lg drop-shadow-lg w-w270 pb-4 md:h-h150'>
        <Education  className="flex justify-center mx-auto pt-3 md:pt-4 w-w20 h-h20"/>
        <h3 className='text-black text-sm md:text-xl font-robo font-medium text-center pt-4 md:pt-6'>Experience</h3>
        <p className='text-five text-xs md:text-base font-robo font-normal text-center pt-1 md:pt-2'>2 + years</p>
        <p className='text-five text-sm  md:text-base font-robo font-normal text-center '>Frontend Development</p>
       </div>

        <div className='bg-four rounded-lg drop-shadow-lg w-w270 pb-4 md:h-h150'>
        <Education  className="flex justify-center mx-auto pt-3 md:pt-4 w-w20 h-h20"/>
        <h3 className='text-black text-sm md:text-xl font-robo font-medium text-center pt-4 md:pt-6'>Education</h3>
        <p className='text-five text-xs md:text-base font-robo font-normal text-center pt-1 md:pt-2'>Diploma</p>
        <p className='text-five text-sm  md:text-base font-robo font-normal text-center '>B.S.c  Bachelors Degree</p>
       </div>
        </Flex>
        <p className=' w-full md:text-left text-center px-4 text-black text-sm md:text-lg font-normal font-robo pt-10 pb-8'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
        <a href={CV} download="">
        <Button text="Download CV" className='px-12 flex m-auto' />
        </a>
        </div>
      </Flex>
      </div>

    </Container>

   </Section>



   <Section className='bg-third pt-2 md:pt-5 md:pb-16'>
    <Container>
      <h2 className='text-black text-3xl md:text-text50 font-medium font-robo pb-1 md:pb-3 text-center'>Skills</h2>
      <p className='text-black text-base md:text-lg font-normal font-robo text-center'>My technical level</p>

      <div className='md:justify-evenly md:flex px-4'>
        <div className='md:w-[430px] pb-7 md:h-[280px] rounded-xl drop-shadow-2xl bg-four mt-12 md:mt-16'>
          <h4 className='pt-8 pb-8 text-center text-xl text-black font-robo font-normal'>Frontend developer</h4>

          <Flex className='flex-wrap '>

          <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>HTML</h5>
            <p className='text-xs text-five font-normal  font-robo' >Experienced</p>
          </div>
          </Flex>

          <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>Tailwind</h5>
            <p className='text-xs text-five font-normal  font-robo' >Basic</p>
          </div>
          </Flex>
          <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>Css</h5>
            <p className='text-xs text-five font-normal  font-robo' >Experienced</p>
          </div>
          </Flex>
          <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>JavaScript</h5>
            <p className='text-xs text-five font-normal  font-robo' >Basic</p>
          </div>
          </Flex>
          <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>Bootstrap</h5>
            <p className='text-xs text-five font-normal  font-robo' >Experienced</p>
          </div>
          </Flex>
          <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>Recat</h5>
            <p className='text-xs text-five font-normal  font-robo' >Intermediate</p>
          </div>
          </Flex>
          </Flex>
        </div>
        <div className='md:w-[430px] pb-7 md:h-[280px] rounded-xl drop-shadow-2xl bg-four mt-10 md:mt-16'>
          <h4 className='pt-8 pb-8 text-center text-xl text-black font-robo font-normal'>Backend developer</h4>

          <Flex className='flex-wrap '>

          <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>Node</h5>
            <p className='text-xs text-five font-normal  font-robo' >Intermediate</p>
          </div>
          </Flex>

          <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>Express</h5>
            <p className='text-xs text-five font-normal  font-robo' >Basic</p>
          </div>
          </Flex>
          <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>MongDB</h5>
            <p className='text-xs text-five font-normal  font-robo' >Intermediate</p>
          </div>
          </Flex>
          <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>Git</h5>
            <p className='text-xs text-five font-normal  font-robo' >Experienced</p>
          </div>
          </Flex>
          <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>Firebase</h5>
            <p className='text-xs text-five font-normal  font-robo' >Intermediate</p>
          </div>
          </Flex>
          <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
          <TiStarburst className='mt-0.5'/>
          <div>
            <h5 className='text-sm text-black font-medium  font-robo'>SQL</h5>
            <p className='text-xs text-five font-normal  font-robo' >Intermediate</p>
          </div>
          </Flex>
          </Flex>
        </div>
      </div>
    </Container>

   </Section>
   

   <Section className='bg-third py-20'>
    <Container>
      <div id="project">
      <h2 className='text-black text-3xl md:text-text50 font-semibold font-robo pb-3 text-center'>PROJECTS</h2>
      <p className='w-full px-4 md:w-[780px]  mx-auto text-black text-sm md:text-lg font-normal font-robo  text-center'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>

      <div className='md:flex md:justify-between items-center md:pt-5 group/project1'>
        <Link to='/casestudy'>
        <Image src={project1} className='py-5 px-12'/>
        </Link>
        <Link to='/casestudy'>
        <div>
        <h3 className='group/project1 w:full px-10 md:px-0 md:w-w412 text-black text-xl md:text-text45 font-medium font-robo pb-4 md:pb-8 text-center pt-2 md:pt-12 md:leading-[60px]'>TalksME is a successful Open-Source  project that I am creating</h3>

      <RouterLink className='relative group/project1'>
      <div className=' flex justify-center items-center gap-x-1.5 md:gap-x-3'>
       <p className='z-10 text-sm md:text-lg text-black font-robo font-semibold'>Case Study</p>
        <BsArrowRight className='mt-1 z-10'/>
       </div>
        <div className='group-hover/project1:w-[120px] md:group-hover/project1:w-[158px] duration-500 absolute md:top-[12px] md:left-[128px] md:w-[60px] md:h-[40px] md:bg-seven top-[10px] left-[103px] w-[50px] h-[35px]'></div>
      </RouterLink>

        </div>
        </Link>
      </div>
      {/* Second Project Start */}

      <div className='md:flex md:justify-between items-center pt-12 md:pt-36 group/project2 '>
        <Link to='/casestudy2'>
        <Image src={project2} className='py-5 px-12'/>

        </Link>
        <Link to='/casestudy2'>
        <div>
        <h3 className='group/project2 w:full px-10 md:px-0 md:w-w412 text-black text-xl md:text-text45 font-medium md:leading-[60px] font-robo pb-4 md:pb-8 text-center pt-2 md:pt-5'>Orebi is a convenient online store where you can purchase any products</h3>

      <RouterLink className='relative group/project2'>
      <div className=' flex justify-center items-center gap-x-3'>
       <p className='z-10 text-sm md:text-lg text-black font-robo font-semibold'>Case Study</p>
        <BsArrowRight className='mt-1 z-10'/>
       </div>
        <div className='group-hover/project2:w-[120px] md:group-hover/project2:w-[158px] duration-500 absolute md:top-[12px] md:left-[128px] md:w-[60px] md:h-[40px] md:bg-seven top-[10px] left-[103px] w-[50px] h-[35px]'></div>
      </RouterLink>

        </div>
        </Link>
      </div>
      
      {/* Second Project end */}
      {/* Event to Event Project start*/}
      <div className='hidden' id="project2">
       <ProjectSecond/>
      </div>
      {/* Event to Event Project start*/}

      </div>
    </Container>
   </Section>
   


   <Section className='bg-third  md:pt-14 pb-10'>
    <Container>
      <div id='service'>
      <h2 className='text-3xl md:text-text50 text-black font-medium font-robo text-center pb-4'>Services</h2>
      <p className='md:w-w833 text-center px-4 mx-auto text-sm md:text-lg text-black font-robo font-normal  md:pb-16'>Our consultants have years of experience on the in success. ​Through the provision of our services. Find the service we provide</p>
      <div className='md:flex md:justify-between mx-12 md:mx-0'>
        <ServiceCard heading='E-Commerce' para='Development'/>
        <ServiceCard heading='Social Media' para='Development'/>
        <ServiceCard heading='Corporate' para='Development'/>
        <ServiceCard heading='Personal' para='Development'/>
      </div>
      </div>
    </Container>
   </Section>



   <Section className='bg-third pb-14 md:py-24 px-3'>
    <Container>
      <div id="contact">
      <h2 className='text-2xl md:pb-5 md:text-text50 text-black font-medium font-robo text-center pb-2'>CONTACT</h2>
      <p className='md:w-w680 text-center mx-4 md:mx-auto text-sm md:text-lg text-black font-robo font-normal pb-8'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      <div className='md:flex md:justify-between '>
        <h3 className='hidden md:inline-block md:w-w412 text-black mx-4 text-2xl md:text-text45 font-medium font-robo pb-3 text-center md:leading-[70px]  md:pt-12 mt-12'>Find Me easily Contact without any technical skills</h3>
        <div className='md:w-[570px] md:h-[470px] bg-four rounded-2xl border-white border-2  '>
         <div className='py-5 md:py-10 px-5 md:px-14'>
         <form action="">
            <div>
            <label htmlFor="name" className=' text-sm md:text-lg text-five font-medium font-robo pb-1.5 block'>Name: </label>
            <input id="name" type="text" className='w-full bg-third rounded placeholder:text-six placeholder:text-xs md:placeholder:text-base placeholder:font-robo placeholder:font-normal py-1 px-3 md:py-2 md:px-6 mb-3' placeholder='Enter Your Name:'/>
            </div>
            <div>
            <label htmlFor="email" className='text-sm md:text-lg text-five font-medium font-robo pb-1.5 block'>Email: </label>
            <input id="email" type="text" className='w-full bg-third rounded placeholder:text-six placeholder:text-xs md:placeholder:text-base placeholder:font-robo placeholder:font-normal py-1 px-3 md:py-2 md:px-6 mb-3' placeholder='Enter Your Email:'/>
            </div>
            <div>
            <label htmlFor="message" className='text-sm md:text-lg text-five font-medium font-robo pb-1.5 block'>Messages: </label>
            <textarea id="message" type="text" className='w-full h-[80px] md:h-[110px] bg-third rounded placeholder:text-six placeholder:text-xs md:placeholder:text-base placeholder:font-robo placeholder:font-normal py-1 px-3 md:py-2 md:px-6 mb-3' placeholder='Enter Your Messages:'/>
            </div>
            <Button text="Message" className='flex mx-auto md:mt-2 md:py-2' />
          </form>
         </div>
        </div>
        
      </div>
      </div>
    </Container>

   </Section>
  </>
  )
}
