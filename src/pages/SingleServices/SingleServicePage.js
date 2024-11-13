import React, { useEffect, useRef, useState } from 'react'
import Color from './Color';
import ThumbNail from './ThumbNail';
import LOGO from '../../assets/BGOptimum.svg'
import {motion} from 'framer-motion'
import OPTIMUM from '../../assets/Logo.svg'
import CircleLogo from '../../assets/CircleLogo';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import BGOptimum from '../Home/BGOptimum';
import NavBar2 from '../../layout/NavBar2';
import { useParams } from 'react-router';
import { useGetSingleService } from '../../api/website';
import Service from './Service';
import { LoadingPage } from '../Loading/LoadingPage';

import LOGO2 from '../../assets/bg.svg'

function SingleServicePage() {


    const {id} = useParams()


    const {data , isLoading}  =useGetSingleService({
      service_id :id
    })
   

    


      if(isLoading){
        return  <LoadingPage />
      }
    return(
        <>

            <div className='fixed  d-flex justify-center h-screen w-screen  top-0 items-center'>
            <img src={LOGO2} className='h-[145vh] w-screen bg-black object-cover ' alt='few' />

      <motion.div className=' absolute'
        // initial= {{ opacity:0}}
        animate={{
            scale:[ 0 ,0.4 ,1 ] ,
        }}
        transition={{
            duration:1.3,
        }}
        >
           <CircleLogo />
         </motion.div>
      </div>
       <div className='app-servic-page'>
        <NavBar2 setChanged={()=>{}}/>
        {/* <div className="loader-company">
          <span className='Word_company'>Single Company</span>
          <span>Single Company</span>
        </div> */}
       <div className="single-service">
        {
          data &&    <Service data={data} />
        }
          
        </div>
       </div>
        
        </>
        
      );
}

export default SingleServicePage