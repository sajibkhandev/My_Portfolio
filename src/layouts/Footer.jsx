import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaYoutube,FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn } from 'react-icons/fa'
import List from '../components/List'
import logo from '../assets/logo.png'
import Image from '../components/Image'

export default function Footer() {
  return (
    <Section className='bg-black pt-20'>
    <Container>
      <Flex className='justify-between'>
        <div className='w-6/12'>
          <Flex className='gap-x-5 items-center pb-24'>
            <Image src={logo} className="w-[90px]"/>
            <h4 className='text-4xl text-white font-robo font-semibold'>SAJIB KHAN</h4>
          </Flex>
          <Flex className='gap-x-4 pl-14'>
            <FaLinkedinIn className='text-white text-3xl'/>
            <FaFacebookF className='text-white text-3xl'/>
            <FaTwitter className='text-white text-3xl'/>
            <FaInstagram className='text-white text-3xl'/>
            <FaYoutube className='text-white text-3xl'/>
          </Flex>

        </div>
        <div className='w-2/12'>
          <h6 className='text-base text-white font-robo font-semibold pb-9'>TOP FEATURES</h6>
         <ul className='flex flex-col gap-y-2'>
          <List className='text-sm text-white font-normal font-robo' text='E-Commerce' />
          <List className='text-sm text-white font-normal font-robo' text='Corporate' />
          <List className='text-sm text-white font-normal font-robo' text='Personal' />
          <List className='text-sm text-white font-normal font-robo' text='Social Media' />
         <List className='text-sm text-white font-normal font-robo' text='Chating Application' />
         </ul>
        </div>
        <div className='w-2/12'>
          <h6 className='text-base text-white font-robo font-semibold pb-9'>PRODUCT</h6>
         <ul className='flex flex-col gap-y-2'>
         <List className='text-sm text-white font-normal font-robo' text='Orebi' />
          <List className='text-sm text-white font-normal font-robo' text='TolksME' />
          <List className='text-sm text-white font-normal font-robo' text='Avada' />
          <List className='text-sm text-white font-normal font-robo' text='Innovate' />
         </ul>
        </div>
        
        <div className='w-2/12'>
          <h6 className='text-base text-white font-robo font-semibold pb-9'>ABOUT US</h6>
         <ul className='flex flex-col gap-y-2 '>
         <List className='text-sm text-white font-normal font-robo' text='About us' />
          <List className='text-sm text-white font-normal font-robo' text='Contact us' />
          <List className='text-sm text-white font-normal font-robo' text='Our Services' />
         </ul>
        </div>
        
      </Flex>
      <p className='text-center text-sm text-white font-pop font-normal py-24'>Copyright 2023. Made by <u><span className='font-semibold underline-offset-1'>SAJIB KHAN</span></u></p>
    </Container>
   </Section>

  )
}
