import React, { useState } from 'react'
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
import project6 from '../assets/project6.png'
import project7 from '../assets/project7.png'
import project8 from '../assets/project8.png'
import service1 from '../assets/service1.png'
import contact1 from '../assets/contact1.png'

import javaScriptProject1 from '../assets/javaScriptProject1.png'


import htmlProject1 from '../assets/htmlProject1.png'
import htmlProject2 from '../assets/htmlProject2.png'
import htmlProject3 from '../assets/htmlProject3.png'
import htmlProject4 from '../assets/htmlProject4.png'
import htmlProject5 from '../assets/htmlProject5.png'
import htmlProject6 from '../assets/htmlProject6.png'
import htmlProject7 from '../assets/htmlProject7.png'
import htmlProject8 from '../assets/htmlProject8.png'

import List from '../components/List'
import EventProject from '../components/EventProject'
import ServiceCard from '../components/ServiceCard'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PrevArrow from '../components/PrevArrow'
import NextArrow from '../components/NextArrow'



export default function Home() {
  let [activeIndex,setActiveIndex]=useState(3)
  let items=["All","Html","JavaScript","React"]
  let handleClick=(index)=>{
    setActiveIndex(index)

  }
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow />,
  };

  return (
  <>
   <Section>
    <div className='bg-banner h-screen bg-no-repeat bg-center bg-cover'>
      <Container>
        <h2 className='text-text50 text-black font-pop font-semibold pt-36 pb-4 text-center'>HEY, I'M MOHAMMAD SAJIB KHAN</h2>
        <p className='text-center mx-auto w-w725 leading-8  text-lg text-black font-robo font-normal '>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        <Button text="View Project " className='flex mx-auto mt-8'/>
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
        <p className='text-black text-lg font-normal font-robo pt-10 pb-6'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
        <Button text="Download CV" className='px-12'/>
        </div>
        
      </Flex>

    </Container>

   </Section>



   <Section className='bg-third py-14'>
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

      <h2 className='text-black text-text50 font-normal font-robo pt-32 pb-5 text-center'>Event to Event Project</h2>
      <Flex className='flex justify-center gap-x-1 '>
        {
          items.map((item,index)=>(
            <div key={index} onClick={()=>handleClick(index)}>
              <List text={item} className={`${index===activeIndex?"bg-black text-white ":""} rounded text-2xl font-robo py-1 px-4   cursor-pointer`}/>
            </div>
          ))
        }
        
        
      </Flex>

      {/* Event to Event Project start*/}
      {
        activeIndex===0?(
          <Slider {...settings}>
          <div >
          <EventProject heading="Html Design" para="fins" src={htmlProject8}/>
          </div>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject7}/>
          </div>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject6}/>
          </div>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject3}/>
          </div>
        </Slider>)
        :
        activeIndex===1?(
          <Slider {...settings}>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject1}/>
          </div>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject4}/>
          </div>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject7}/>
          </div>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject3}/>
          </div>
        </Slider>)
        :
        activeIndex===2?(
          <Slider {...settings}>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject5}/>
          </div>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject6}/>
          </div>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject7}/>
          </div>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject8}/>
          </div>
        </Slider>)
        :
        (<Slider {...settings}>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject1}/>
          </div>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject2}/>
          </div>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject3}/>
          </div>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject4}/>
          </div>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject5}/>
          </div>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject6}/>
          </div>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject7}/>
          </div>
          <div>
          <EventProject heading="Html Design" para="fins" src={htmlProject8}/>
          </div>
        </Slider>)
      }
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
