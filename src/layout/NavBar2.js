import React from 'react'
import LOGO from '../assets/optimom.svg'
import {MdLanguage} from 'react-icons/md'
import { motion } from 'framer-motion';
import DarkModeButton from '../components/DarkModeButton';
import DropDown from '../utils/DropDown';
import { useTranslation } from 'react-i18next';
import {BsArrowLeftCircle} from 'react-icons/bs'
import { Link } from 'react-router-dom';
function NavBar2({setChanged}) {

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
            <Link to={'/'}  className='hover:text-black'>
            <BsArrowLeftCircle   size={40} />

            </Link>
        </div>
        <div className='links'>
         
        </div>
        <div className='rigt'>
              
        </div>
    </motion.div>
  )
}

export default NavBar2