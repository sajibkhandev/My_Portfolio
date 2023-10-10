import React from 'react'

import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import logo from '../assets/logo.png'
import Image from '../components/Image'
import List from '../components/List'

export default function Navber() {
  return (
    <Section className='bg-primary py-16'>
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
                        <List text="Home"/>
                        <List text="About"/>
                        <List text="Project"/>
                        <List text="Service"/>
                        <List text="Contact"/>
                    </ul>

                </Flex>
            </Flex>

        </Container>

    </Section>
  )
}
