import React from 'react'
import { Circle } from 'react-feather';
import { TypeAnimation } from 'react-type-animation';
import Curicle from './Circle';
import LightButton from '../../components/LightButton';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useLang from '../../hooks/useLang';
function HomeCenter() {
  const {t , } = useTranslation()


  const lang  = useLang()
  return (
    <div className='home-center overflow-hidden'>
        <motion.div className='container'
        initial={{ opacity: 0 }}
        animate={{
          opacity:[ 0  , 0,0 ,0 ,  0,1 ] ,
          

      }}
      transition={{
          duration:1.3,
      }}>

          <TypeAnimation
            key={lang}
            sequence={[
            // Same substring at the start will only be typed out once, initially
            300,
            t('welcome_to'),
            3000, // wait 1s before replacing "Mice" with "Hamsters"
            t("optimum_typee"),
            // 3000
            
            ]}
            wrapper="div"
            speed={35}
            // style={{ fontSize: '2em', display: 'inline-block' }}
            className='type-animation'
            repeat={Infinity}
            />
            <Curicle/>
            <h1 
            > {t('optimum_international')} <br/> {t("hoilding_group")} </h1>
            {/* <h3>{t("with_holding_group")}</h3> */}
            {/* <p className='cursor-pointer'>{t("let's_take_a_tour_of_our_companies_which_provide")}<br/> {t("export_and_import_services")} </p> */}
            <div className='flex justify-center '>
                
                <a className='button-a get-started  ' href='#service' 
                >{t("get_started")} </a>
                <a className='button-a learn-more' href='#about_us' >{t("learn_more")}</a>
            </div>
        </motion.div>
    </div>
  )
}

export default HomeCenter

