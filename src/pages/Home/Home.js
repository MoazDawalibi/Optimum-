import React, { useEffect, useState } from 'react'
import NavBar from '../../layout/NavBar'
import HomeCenter from './HomeCenter'
import Footer from '../../layout/Footer'
import Services from '../Services/Services'
import AboutUs from './AboutUs'
import CircleLogo from '../../assets/CircleLogo'
import {motion} from 'framer-motion'
import ContactUs from './ContactUs'
import Wave from 'react-wavify'
import LOGO from '../../assets/bg.svg'
import { useGetALlStatics } from '../../api/website'
import { LoadingPage } from '../Loading/LoadingPage'
import { MdError } from 'react-icons/md'
import ErrorPage from './ErrorPage'

function Home() {


const rootStyles = getComputedStyle(document.documentElement);
const primaryColor = rootStyles.getPropertyValue('--bg');
const primaryColor2 = rootStyles.getPropertyValue('--bg2');

  const {data , isLoading , isError , isSuccess}  = useGetALlStatics()

  useEffect(()=>{

    if(isSuccess){
      document.documentElement.style.setProperty("--from_api", data?.static_information?.find((s)=> s.key == 'color').value);
    }
  },[isSuccess  , data])


const [Changed, setChanged] = useState(false)
  const [color, setcolor] = useState(primaryColor)
  useEffect(() => {
   setcolor(primaryColor)
  }, [primaryColor])
  
  if(isLoading){
    return <LoadingPage />
  }
  if(isError){
    return <ErrorPage />
  }
  return (
  
    <div className='app-page'>
      <div className='fixed  d-flex justify-center h-screen w-screen  items-center'>
      <img src={LOGO} className='h-[185vh] w-screen bg-black object-cover ' alt='few' />

      <motion.div className=' absolute'
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
      
      <div className='home-section' id='#'>
        <NavBar setChanged={setChanged} /> 
        <HomeCenter />
        <Services services={data?.services}/>
        <AboutUs  about_us={data?.static_information?.find(info => info.key == 'AboutUs')}/>
        <ContactUs socialmedia={data?.social_medias} 
          phone={data?.static_information?.find(info => info.key == 'Phone')}
          email={data?.static_information?.find(info => info.key == 'Email')}
          location={data?.static_information?.find(info => info.key == 'Location')}

        />

        <Wave 
        fill={primaryColor2}
        paused={false}
        options={{
          height: 70,
          amplitude: 15,
          speed: 0.30,
          points: 5
        }}
      />
        <Footer  socialmedia ={data?.social_medias}/>
      </div>
    </div>
  
  
  )
}

export default Home