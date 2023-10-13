import React, { useEffect, useState } from 'react'

import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import logo from '../assets/logo.png'
import Image from '../components/Image'
import List from '../components/List'
import { Link } from 'react-scroll'

export default function Navber() {
    let [home,setHome]=useState(false)
    let [about,setAbout]=useState(false)
    let [project,setProject]=useState(false)
    let [service,setService]=useState(false)
    let [contact,setContact]=useState(false)
    let handleHome=()=>{
        setHome(true)
        setAbout(false)
        setProject(false)
        setService(false)
        setContact(false)
        
    }
    let handleAbout=()=>{
       setAbout(true)

       setHome(false)
       setProject(false)
       setService(false)
       setContact(false)
        
    }
    let handleProject=()=>{
       setProject(true)

       setHome(false)
       setAbout(false)
       setService(false)
       setContact(false)
        
    }
    let handleService=()=>{
       setService(true)

       setHome(false)
       setAbout(false)
       setProject(false)
       setContact(false)
        
    }
    let handleContact=()=>{
       setContact(true)

       setHome(false)
       setAbout(false)
       setProject(false)
       setService(false)
        
    }
   
  return (
    <Section className='bg-primary py-12'>
        <Container>
            <Flex>
                <div className='w-1/2'>
                   <Flex className='items-center gap-x-5'>
                   <Image src={logo}/>
                    <h2 className='text-secondary text-text28 font-robo font-semibold'>SAJIB KHAN</h2>
                   </Flex>
                </div>
                <Flex className='w-1/2 justify-end '>
                    <ul className='flex gap-x-7 items-center'>
                        
                        <Link onClick={handleHome} to="hero" spy={true} smooth={true} offset={-170} duration={100} ><List text="Home" className={`after:absolute after:-bottom-[2px] after:left-0 hover:after:w-1/2 ${home?"hover:after:w-full text-red-500":""}  after:h-[3px] after:bg-white`}/></Link>
                        <Link onClick={handleAbout} to="about" spy={true} smooth={true} offset={-50} duration={600} ><List text="About" className={`after:absolute after:-bottom-[2px] after:left-0 hover:after:w-1/2 ${about?"hover:after:w-full text-red-500":""}  after:h-[3px] after:bg-white`}/></Link>
                        <Link onClick={handleProject} to="project" spy={true} smooth={true} offset={-25} duration={1200}><List text="Project" className={`after:absolute after:-bottom-[2px] after:left-0 hover:after:w-1/2 ${project?"hover:after:w-full text-red-500":""}  after:h-[3px] after:bg-white`}/></Link>
                        <Link onClick={handleService} to="service" spy={true} smooth={true} offset={-40} duration={1600}><List text="Service" className={`after:absolute after:-bottom-[2px] after:left-0 hover:after:w-1/2 ${service?"hover:after:w-full text-red-500":""}  after:h-[3px] after:bg-white`}/></Link>
                        <Link onClick={handleContact} to="contact" spy={true} smooth={true} offset={-10} duration={2000}><List text="Contact" className={`after:absolute after:-bottom-[2px] after:left-0 hover:after:w-1/2 ${contact?"hover:after:w-full text-red-500":""}  after:h-[3px] after:bg-white`}/></Link>
                    </ul>

                </Flex>
            </Flex>

        </Container>

    </Section>
  )
}
