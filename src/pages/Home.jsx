import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Button from '../components/Button'
import Image from '../components/Image'
import aboutImage from '../assets/about.png'
import Flex from '../components/Flex'
import Education from '../components/icons/Education'
import {TiStarburst} from 'react-icons/ti'
import {FaYoutube,FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn} from 'react-icons/fa'

import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import service1 from '../assets/service1.png'
import contact1 from '../assets/contact1.png'
import footer from '../assets/footerLogo.png'
import List from '../components/List'

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



   <Section className='bg-third py-14'>
    <Container>
      <h2 className='text-black text-text50 font-medium font-robo pb-3 text-center'>Skills</h2>
      <p className='text-black text-lg font-normal font-robo text-center'>My technical level</p>

      <Flex className='justify-evenly'>
        <div className='w-[430px] h-[280px] rounded-xl bg-four mt-16'>
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
        <div className='w-[430px] h-[280px] rounded-xl bg-four mt-16'>
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

      <Flex className='justify-between items-center pt-5'>
        <Image src={project1}/>
        <h3 className='w-w412 text-black text-text45 font-medium font-robo pb-3 text-center pt-12'>Automatically send invitations and messages on LinkedIn by creating</h3>
      </Flex>
      {/* Second Project Start */}

      <Flex className='justify-between items-center pt-32  '>
        <Image src={project2}/>
        <h3 className='w-w390 text-black text-text45 font-medium font-robo pb-3 text-center '>Find clients easily on LinkedIn without any technical skills</h3>
      </Flex>
      
      {/* Second Project end */}
      <h2 className='text-black text-text50 font-normal font-robo pt-32 pb-8 text-center'>Event to Event Project</h2>
      <ul className='flex justify-center gap-x-1 '>
        <List text='All' className='text-2xl font-robo hover:bg-black py-1 px-4 hover:rounded hover:text-white duration-500 cursor-pointer'/>
        <List text='Html' className='text-2xl font-robo hover:bg-black py-1 px-4 hover:rounded hover:text-white duration-500 cursor-pointer'/>
        <List text='JavaScript' className='text-2xl font-robo hover:bg-black py-1 px-4 hover:rounded hover:text-white duration-500 cursor-pointer'/>
        <List text='React' className='text-2xl font-robo hover:bg-black py-1 px-4 hover:rounded hover:text-white duration-500 cursor-pointer'/>
      </ul>
      <Flex className='justify-between pt-20'>
        <Image src={project3}/>
        <Image src={project4}/>
        <Image src={project5}/>
      </Flex>

    </Container>
   </Section>
   


   <Section className='bg-third pt-14'>
    <Container>
      <h2 className='text-text50 text-black font-medium font-robo text-center pb-3'>Services</h2>
      <p className='w-w833 text-center mx-auto text-lg text-black font-robo font-normal pb-24'>Our consultants have years of experience on the in success. ​Through the provision of our services. Find the service we provide</p>
      <Flex className='justify-between'>
        <Image src={service1}/>
        <Image src={service1}/>
        <Image src={service1}/>
        <Image src={service1}/>
      </Flex>
    </Container>

   </Section>

   <Section className='bg-third py-24'>
    <Container>
      <h2 className='text-text50 text-black font-medium font-robo text-center pb-5'>CONTACT</h2>
      <p className='w-w680 text-center mx-auto text-lg text-black font-robo font-normal pb-14'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      <Flex className='justify-between'>
        <h3 className='w-w412 text-black text-text45 font-medium font-robo pb-3 text-center pt-12'>Find clients easily on LinkedIn without any technical skills</h3>
        <Image src={contact1} />
        
      </Flex>
    </Container>

   </Section>


   <Section className='bg-black pt-20'>
    <Container>
      <Flex className='justify-between'>
        <div className='w-6/12'>
          <Flex className='gap-x-5 items-center pb-28'>
            <Image src={footer}/>
            <h4 className='text-4xl text-white font-robo font-semibold'>SAJIB KHAN</h4>
          </Flex>
          <Flex className='gap-x-4 pl-16'>
            <FaYoutube className='text-white text-2xl'/>
            <FaFacebookF className='text-white text-2xl'/>
            <FaInstagram className='text-white text-2xl'/>
            <FaTwitter className='text-white text-2xl'/>
            <FaLinkedinIn className='text-white text-2xl'/>
          </Flex>

        </div>
        <div className='w-2/12'>
          <h6 className='text-base text-white font-robo font-semibold pb-9'>TOP FEATURES</h6>
         <ul className='flex flex-col gap-y-2'>
         <List className='text-sm text-white font-normal font-robo' text='Cold Email' />
          <List className='text-sm text-white font-normal font-robo' text='Pricing' />
          <List className='text-sm text-white font-normal font-robo' text='Emial code' />
          <List className='text-sm text-white font-normal font-robo' text='LinkedIn' />
          <List className='text-sm text-white font-normal font-robo' text='How it works?' />
         </ul>
        </div>
        <div className='w-2/12'>
          <h6 className='text-base text-white font-robo font-semibold pb-9'>PRODUCT</h6>
         <ul className='flex flex-col gap-y-2'>
         <List className='text-sm text-white font-normal font-robo' text='Restriction' />
          <List className='text-sm text-white font-normal font-robo' text='Bypass' />
          <List className='text-sm text-white font-normal font-robo' text='Ambassador' />
          <List className='text-sm text-white font-normal font-robo' text='Team Plan' />/>
         </ul>
        </div>
        
        <div className='w-2/12'>
          <h6 className='text-base text-white font-robo font-semibold pb-9'>ABOUT US</h6>
         <ul className='flex flex-col gap-y-2'>
         <List className='text-sm text-white font-normal font-robo' text='ABOUT US' />
          <List className='text-sm text-white font-normal font-robo' text='Contact us' />
          <List className='text-sm text-white font-normal font-robo' text='Emial code' />
          <List className='text-sm text-white font-normal font-robo' text='Legal Notices' />
         </ul>
        </div>
        
      </Flex>
      <p className='text-center text-sm text-white font-pop font-normal py-24'>Copyright 2023 Waapi, all rights reserved.</p>
    </Container>
   </Section>

   
  </>
  )
}
