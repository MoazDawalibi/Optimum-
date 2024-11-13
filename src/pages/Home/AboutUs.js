import React from 'react'
import ABOUTUS from '../../assets/about.jpg'
import { useTranslation } from 'react-i18next';

import {motion} from 'framer-motion'
import TranslateArray from '../../hooks/useTranslatearray';
export default function AboutUs({about_us}){

  const lang  = localStorage.getItem('i18nextLng')
  // console.log(about_us)
  const {t} = useTranslation()

    return (
    <div className='AboutUs'>
        <motion.div
           id='about_us'
      whileInView={{
        opacity:[0 , 0.3 , 0.5 ,1],
        scale:[ 0.8 ,1 ] ,
    }}
    transition={{
        duration:1.3,
    }}
    className='responsive-container-block bigContainer'>
  <h1 className='about-us font-extrabold'>{t("about_us")}</h1>

  <div className="responsive-container-block Container">

    <img
      className="mainImg"
      alt='img-about-us'
      src={ABOUTUS}
    />
    <div className="allText aboveText">
  
      <p className="text-blk description">
        
      
         <div dangerouslySetInnerHTML={{ __html:TranslateArray(about_us.translations , lang , "value")}} />

       
      </p>
      {/* <button className="explore">{t("explore")}</button> */}
    </div>
  </div>

</motion.div>
    </div>

    )
}