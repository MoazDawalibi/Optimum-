import React from 'react'
import LOGO from '../assets/optimom.svg'
import {MdLanguage} from 'react-icons/md'
import { motion } from 'framer-motion';
import DarkModeButton from '../components/DarkModeButton';
import DropDown from '../utils/DropDown';
import { useTranslation } from 'react-i18next';

function NavBar({setChanged}) {

  const {t} = useTranslation()
  // 
  return (
    <motion.div
    
    initial= {{ 
     
       opacity:0}}
    animate={{
        
        opacity:[0.1  , 1.0],
    }}
    transition={{
        duration:2.5,
    }}
    className='navbar-home relative'>
        <div className='logo'>
                <img src={LOGO} alt='LOGO-COMPANY' className='img-logo' />
        </div>
        <div className='links'>
            <a href='#' className='first-links border-b-2 border-transparent  '>{t('home')}</a>
            <a href='#service'>{t("services")}</a>
            <a href='#about_us'>{t("about_us")}</a>
            <a href='#contact_us'>{t("contact_us")}</a>
        </div>
        <div className='rigt'>
               <DropDown/>
                <DarkModeButton setChanged={setChanged}/>
        </div>
    </motion.div>
  )
}

export default NavBar