import React from 'react'

import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import logo from '../assets/logo.png'
import Image from '../components/Image'
import List from '../components/List'
import { Link } from 'react-scroll'

export default function Navber() {
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
                        <Link to="hero" spy={true} smooth={true} offset={-170} duration={100} ><List text="Home"/></Link>
                        <Link to="about" spy={true} smooth={true} offset={-50} duration={600} ><List text="About"/></Link>
                        <Link to="project" spy={true} smooth={true} offset={-25} duration={1200}><List text="Project"/></Link>
                        <Link to="service" spy={true} smooth={true} offset={-40} duration={1600}><List text="Service"/></Link>
                        <Link to="contact" spy={true} smooth={true} offset={-10} duration={2000}><List text="Contact"/></Link>
                    </ul>

                </Flex>
            </Flex>

        </Container>

    </Section>
  )
}
