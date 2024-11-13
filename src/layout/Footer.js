import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import {BsWhatsapp} from 'react-icons/bs'
import {BsTwitter,BsTelegram, BsSnapchat} from 'react-icons/bs'
import {AiFillLinkedin}from 'react-icons/ai'




function Footer({socialmedia}) {

  const {t} = useTranslation()
      
    let is_have_facebook = socialmedia.find((social)=>{
        return  social.icon == 'Facebook'
        });
    let is_have_instagram = socialmedia.find((social)=>{
          return  social.icon == 'Instgram'
          });
    let is_have_twitter = socialmedia.find((social)=>{
            return  social.icon == 'Twitter'
            });
    let is_have_whatsapp = socialmedia.find((social)=>{
              return  social.icon == 'Whatsapp'
            });
    let is_have_telegrame = socialmedia.find((social) => {
    return social.icon == "Telegram";
    });
    let is_have_snapchat = socialmedia.find((social) => {
    return social.icon == "Snapchat";
    });
    let is_have_linkedin = socialmedia.find((social) => {
    return social.icon == "LinkedIn";
    });
             

    // console.log(is_have_facebook);
  return (
    <>
 <>
  <section className="footer">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
      <nav className="flex flex-wrap justify-center -mx-5 -my-2">
        <div className="px-5 py-2">
          <a
            href="#"
            className="text-base leading-6 "
          >
            {t("home")}
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="#service"
            className="text-base leading-6 "
          >
             {t("services")}
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="#about_us"
            className="text-base leading-6 "
          >
             {t("about_us")}
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="#contact_us"
            className="text-base leading-6 "
          >
             {t("contact_us")}
          </a>
        </div>
      </nav>
      <div className="flex justify-center mt-8 space-x-6 ">
        {
          is_have_facebook &&   
          <a href={is_have_facebook?.link}  target='blank' className="text-gray-400 hover:text-gray-500 ">
          
          <AiFillFacebook />
        </a>
        }
        {
          is_have_instagram &&
           <a href={is_have_instagram?.link} target='blank' className="text-gray-400 hover:text-gray-500">
        <BsInstagram />
        </a>
        }
        {
        is_have_twitter &&
          <a href={is_have_twitter?.link} target='blank' className="text-gray-400 hover:text-gray-500">
          <BsTwitter/>
        </a>
        }
        {
        is_have_whatsapp &&
         <a href={is_have_whatsapp?.link} target='blank' className="text-gray-400 hover:text-gray-500">
          <BsWhatsapp />
        </a>

        }
        {
          is_have_telegrame &&
           <a href={is_have_telegrame?.link} target='blank' className="text-gray-400 hover:text-gray-500">
        <BsTelegram />
        </a>
        }
        {
        is_have_snapchat &&
          <a href={is_have_snapchat?.link} target='blank' className="text-gray-400 hover:text-gray-500">
          <BsSnapchat/>
        </a>
        }
        {
        is_have_linkedin &&
         <a href={is_have_linkedin?.link} target='blank' className="text-gray-400 hover:text-gray-500">
          <AiFillLinkedin />
        </a>

        }

      
        
        
       
        

      </div>
      <p className="mt-8 text-base leading-6 text-center text-gray-400">
        © 2023 SDNone, OverWritted.
      </p>
    </div>
  </section>
</>


    </>

  )
}

export default Footer