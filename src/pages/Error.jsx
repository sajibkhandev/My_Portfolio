// import React from 'react';
// import Slider from 'react-slick';
// import EventProject from '../components/EventProject';
// import htmlProject7 from '../assets/htmlProject7.png';

// import { useParams, Link } from 'react-router-dom';

// const items = [
//   {
//     id: 1,
//     heading: 'Item 1',
//     para: 'Html',
//     src: htmlProject7,
//   },
//   {
//     id: 2,
//     heading: 'Item 2',
//     para: 'Html',
//     src: htmlProject7,
//   },
//   {
//     id: 3,
//     heading: 'Item 3',
//     para: 'Html',
//     src: htmlProject7,
//   },
//   {
//     id: 3,
//     heading: 'Item 3',
//     para: 'Html',
//     src: htmlProject7,
//   },
//   {
//     id: 3,
//     heading: 'Item 3',
//     para: 'Html',
//     src: htmlProject7,
//   },
//   {
//     id: 3,
//     heading: 'Item 3',
//     para: 'Html',
//     src: htmlProject7,
//   },
//   {
//     id: 3,
//     heading: 'Item 3',
//     para: 'Html',
//     src: htmlProject7,
//   },
//   // Add more items as needed
// ];

// const settings = {
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
// };

// function MySlider() {
//   const { itemId } = useParams(); // Access the dynamic itemId parameter

//   return (
//     <Slider {...settings}>
//       {items.map((item) => (
//         <div key={item.id}>
//           {/* Use Link to create dynamic links */}
//           <Link to={`/slider/${item.id}`}>
//             <EventProject
//               heading={item.heading}
//               para={item.para}
//               src={item.src}
//             />
//           </Link>
        
//         </div>
//       ))}
//     </Slider>
//   );
// }

// export default MySlider;
// <div>
//         <h2 className='text-black text-text50 font-normal font-robo pt-32 pb-5 text-center'>Event to Event Project</h2>
//         <Flex className='flex justify-center gap-x-1 '>
//         {
//           items.map((item,index)=>(
//             <div key={index} onClick={()=>handleClick(index)}>
//               <List text={item} className={`${index===activeIndex?"bg-black text-white ":""} rounded text-2xl font-robo py-1 px-4   cursor-pointer`}/>
//             </div>
//           ))
//         }
        
        
//       </Flex>

      
//       {
//         activeIndex===0?(
            
            
//           <Slider {...settings}>
//             {}
           
           
//           <Link to='https://sajibkhandev.github.io/Project-12_Slider/'>
//           <div>
//           <EventProject heading="Ohma Design" para="Html" src={htmlProject6}/>
//           </div>
//           </Link>
//           <div>
//           <EventProject heading="Combine" para="Jscript" src={javaScriptProject7}/>
//           </div>
//           <div>
//           <EventProject heading="Finsweet Design" para="Html" src={htmlProject2}/>
//           </div>
//           <div>
//           <EventProject heading="Slider" para="Jscript" src={javaScriptProject2}/>
//           </div>
//          <div>
//           <EventProject heading="Avada Design" para="Html" src={htmlProject5}/>
//           </div>
//           <div>
//           <EventProject heading="Query Design" para="Html" src={htmlProject8}/>
//           </div>
//           <div>
//           <EventProject heading="Game Design" para="React" src={reactProject1}/>
//           </div>
//           <div>
//           <EventProject heading="Innovate Design" para="Html" src={htmlProject7}/>
//           </div>
//           <div>
//           <EventProject heading="Counter" para="Jscript" src={javaScriptProject6}/>
//           </div>
//           <div>
//           <EventProject heading="Todo Design" para="React" src={reactProject3}/>
//           </div>
//           <div>
//           <EventProject heading="Innovate2 Design" para="Html" src={htmlProject3}/>
//           </div>
//           <div>
//           <EventProject heading="You Sulition Design" para="Html" src={htmlProject4}/>
//           </div>
//           <div>
//           <EventProject heading="Form Design" para="React" src={reactProject4}/>
//           </div>
//           <div>
//           <EventProject heading="Facebook Demo" para="Jscript" src={javaScriptProject3}/>
//           </div>
//           <div>
//           <EventProject heading="Stack Design" para="Html" src={htmlProject1}/>
//           </div>
//           <div>
//           <EventProject heading="Search Design" para="React" src={reactProject2}/>
//           </div>
//           <div>
//           <EventProject heading="Calculator" para="Jscript" src={javaScriptProject8}/>
//           </div>
//           <div>
//           <EventProject heading="Multipul Game" para="Jscript" src={javaScriptProject4}/>
//           </div>
//         </Slider>)
//         :
//         activeIndex===1?(
//           <Slider {...settings}>
//            <div>
//           <EventProject heading="Innovate Design" para="Html" src={htmlProject7}/>
//           </div>
//           <div>
//           <EventProject heading="Innovate2 Design" para="Html" src={htmlProject3}/>
//           </div>
//           <div>
//           <EventProject heading="Finsweet Design" para="Html" src={htmlProject2}/>
//           </div>
//           <div>
//           <EventProject heading="You Sulition Design" para="Html" src={htmlProject4}/>
//           </div>
//           <div>
//           <EventProject heading="Avada Design" para="Html" src={htmlProject5}/>
//           </div>
//           <div>
//           <EventProject heading="Ohma Design" para="Html" src={htmlProject6}/>
//           </div>
//           <div>
//           <EventProject heading="Stack Design" para="Html" src={htmlProject1}/>
//           </div>
//           <div>
//           <EventProject heading="Query Design" para="Html" src={htmlProject8}/>
//           </div>
          
//         </Slider>)
//         :
//         activeIndex===2?(
//           <Slider {...settings}>
//           <div>
//           <EventProject heading="Combine" para="Jscript" src={javaScriptProject7}/>
//           </div>
//           <div>
//           <EventProject heading="Slider" para="Jscript" src={javaScriptProject2}/>
//           </div>
//           <div>
//           <EventProject heading="CountDown" para="Jscript" src={javaScriptProject9}/>
//           </div>
//           <div>
//           <EventProject heading="Counter" para="Jscript" src={javaScriptProject6}/>
//           </div>
//           <div>
//           <EventProject heading="Facebook Demo" para="Jscript" src={javaScriptProject3}/>
//           </div>
//           <div>
//           <EventProject heading="Calculator" para="Jscript" src={javaScriptProject8}/>
//           </div>
//           <div>
//           <EventProject heading="Multipul Game" para="Jscript" src={javaScriptProject4}/>
//           </div>
//         </Slider>)
//         :
//         (<Slider {...settings}>
//           <div>
//           <EventProject heading="Search Design" para="React" src={reactProject2}/>
//           </div>
//           <div>
//           <EventProject heading="Game Design" para="React" src={reactProject1}/>
//           </div>
//           <div>
//           <EventProject heading="Form Design" para="React" src={reactProject4}/>
//           </div>
//           <div>
//           <EventProject heading="Todo Design" para="React" src={reactProject3}/>
//           </div>
          
//         </Slider>)
//       }
//     </div>
