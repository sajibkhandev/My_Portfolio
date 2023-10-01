import React, { useState } from 'react'

import Flex from '../components/Flex'
import List from '../components/List'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import EventProject from '../components/EventProject'

import PrevArrow from '../components/PrevArrow'
import NextArrow from '../components/NextArrow'


import reactProject1 from '../assets/reactProject1.png'
import reactProject2 from '../assets/reactProject2.png'
import reactProject3 from '../assets/reactProject3.png'
import reactProject4 from '../assets/reactProject4.png'


import javaScriptProject2 from '../assets/javaScriptProject2.png'
import javaScriptProject3 from '../assets/javaScriptProject3.png'
import javaScriptProject4 from '../assets/javaScriptProject4.png'
import javaScriptProject6 from '../assets/javaScriptProject6.png'
import javaScriptProject7 from '../assets/javaScriptProject7.png'
import javaScriptProject8 from '../assets/javaScriptProject8.png'
import javaScriptProject9 from '../assets/javaScriptProject9.png'


import htmlProject1 from '../assets/htmlProject1.png'
import htmlProject2 from '../assets/htmlProject2.png'
import htmlProject3 from '../assets/htmlProject3.png'
import htmlProject4 from '../assets/htmlProject4.png'
import htmlProject5 from '../assets/htmlProject5.png'
import htmlProject6 from '../assets/htmlProject6.png'
import htmlProject7 from '../assets/htmlProject7.png'
import htmlProject8 from '../assets/htmlProject8.png'
import data from '../components/data'
import { Link } from 'react-router-dom';

export default function ProjectPart2() {
    let [alldata,setAllData]=useState(data)
    let [activeIndex,setActiveIndex]=useState(3)
    let items=["All","Html","JavaScript","React"]
    console.log(data);
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
    <div>
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
      {
        activeIndex===0?(
          <Slider {...settings}>
            {alldata.map((item,index)=>{
                let {id,heading,para,imgPath,link}=item
                return (
                    <div key={index}>
                        <Link to={link}>
                            <EventProject src={imgPath} heading={heading} para={para}/>
                        </Link>

                    </div>
                )
            })}
           
          </Slider>
        )
        :
        activeIndex===1?(
            <Slider {...settings}>
           
          </Slider>
        )
        :
        activeIndex===2?(
            <Slider {...settings}>
           
          </Slider>
        )
        :
        (
            <Slider {...settings}>
           
          </Slider>
        )
      }
    </div>
    
    
    
  )
}
