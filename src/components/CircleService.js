import React, { useEffect, useRef } from 'react'
import { CircleMenu, CircleMenuItem } from 'react-circular-menu'

import { useWindowSize } from '../hooks/useWindowSize'
import { MIDLAPTOP } from '../config/BREAKPOINTS'
import useWindowScroll  from '@react-hook/window-scroll'

import { useState } from 'react'
import FirstCompany from '../assets/Company/FirstCompany'
import SecondCompany from '../assets/Company/SecondCompany'
import ThirdCompany from '../assets/Company/ThirdCompany'
import FourthCompany from '../assets/Company/FourthCompany'
import FifthCompany from '../assets/Company/FifthCompany'
import SixCompany from '../assets/Company/SixCompany'
import { useNavigate } from 'react-router'
import SevenCompany from '../assets/Company/SevenCompany'
function  CircleService() {

  const size = useWindowSize()
  const history = useNavigate()
  const scroler = useWindowScroll()
  const [isopen , seIsOpen] = useState(true)
  //159  && 1451


  // const Icons  =  [ <FirstCompany/> , <SecondCompany /> , <ThirdCompany /> , <FourthCompany /> , <FifthCompany/> , <SixthCompany /> , <SeventhCompany/> ]
    // const Icons  =  [ FirstCompany   , SecondCompany   ,ThirdCompany ,FourthCompany ,FifthCompany , SixCompany  ] 
    const Icons =[

      {
        id:3,
        image:FirstCompany
      },
      {
        id:4,
        image:SecondCompany
      },
      {
        id:7,
        image:ThirdCompany
      },
      {
        id:6,
        image:FourthCompany
      },
      {
        id:2,
        image:FifthCompany
      },
      {
        id:11,
        image:SixCompany
      },
      {
        id:12,
        image:SevenCompany
      }
    ]
  return (
    
    <CircleMenu  
    onMenuToggle={()=>seIsOpen(v => !v)}
    menuToggleElement={
    <div className=' cursor-pointer text-5xl color-secondary  close-circle-service animate-pulse -bottom-12'>
      
    </div>}
        startAngle={0}
        rotationAngle={360}
        itemSize={size?.width  < MIDLAPTOP ? 5 : 8}
        open={scroler  >350 && scroler < 1251 ? true : false}
        radius={size?.width  < MIDLAPTOP ? 13:20}
        rotationAngleInclusive={false}
        className=' '
      >
        {
          Icons.map( (Icon) => (
            <CircleMenuItem
            size={20}
            onClick={()=>history('/onseServices/' + Icon.id)}
            className='bg-black'
             radius={20}>
             {<Icon.image      />}
            </CircleMenuItem>
          ))
        }
      </CircleMenu>
  )
}

export default CircleService



// <CircleMenuItem
//         size={20}
//         radius={20}
//           onClick={() => console.log("Clicked the item")}
//           tooltip="Email"
//           tooltipPlacement="right"
//           className='  bg-black   '
//         >
//          <TbDiamond  className='item-circle-service'/>
//         </CircleMenuItem>
//         <CircleMenuItem
//         size={20}
//         radius={20}
//           onClick={() => console.log("Clicked the item")}
//           tooltip="Email"
//           tooltipPlacement="right"
//           className='  bg-inherit bg-black  '
//         >
//           <FirstCompany />
//           {/* <img src={FIRSTCOMPANY} alt='images' className='item-circle-service' /> */}
//           {/* <TiLeaf  className='item-circle-service'/> */}
//         </CircleMenuItem>
//         <div
//           onClick={() => console.log("Clicked the item")}
//           tooltip="Email"
//           tooltipPlacement="right"
//           className='  bg-black '
//         >
//          <GiCoffeeBeans  className='item-circle-service'/>
//         </div>
//         <CircleMenuItem
//         size={20}
//         radius={20}
//           onClick={() => console.log("Clicked the item")}
//           tooltip="Email"
//           tooltipPlacement="right"
//           className='  bg-black '
//         >
//          <GiSheep  className='item-circle-service'/>
//         </CircleMenuItem>
//         <CircleMenuItem
//         size={20}
//         radius={20}
//           onClick={() => console.log("Clicked the item")}
//           tooltip="Email"
//           tooltipPlacement="right"
//           className='  bg-black '
//         >
//          <MdOutlineRealEstateAgent  className='item-circle-service'/>
//         </CircleMenuItem>
//         <CircleMenuItem
//         size={20}
//         radius={20}
//           onClick={() => console.log("Clicked the item")}
//           tooltip="Email"
//           tooltipPlacement="right"
//           className='  bg-black   '
//         >
//          <GiOilPump  className='item-circle-service'/>
//         </CircleMenuItem>
