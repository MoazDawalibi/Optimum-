import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';

const Flag = [
    {Flag : "flag-icon flag-icon-us me-1" , Name : "English"},
    {Flag : "flag-icon flag-icon-sa me-1" , Name : "Arabic" },
    {Flag : "flag-icon flag-icon-th me-1" , Name : "Thailand"}
]

const CheckLanguage = (lang)=>{

    if(!lang){
        return Flag[0]
    }
    return lang == 'tl' ? Flag[2] : lang == 'ar' ? Flag[1] : Flag[0]
}
const DropDown = () => {
    const [t, i18n] = useTranslation();

  const [Language, setLanguage] = useState([CheckLanguage(i18n.language)])
    function Ar(){
        setLanguage([{Flag : "flag-icon flag-icon-sa me-1" , Name : "Arabic" }])
        console.log(Language[0]);
        i18n.changeLanguage('ar');
        document.body.setAttribute('dir', 'rtl'); document.body.classList.add('ar');localStorage.setItem("Lung", "ar");
    } 
    function En(){
        setLanguage([{Flag : "flag-icon flag-icon-us me-1" , Name : "English"}])
        i18n.changeLanguage('en'); 
        document.body.setAttribute('dir', 'ltr'); document.body.classList.remove('ar');localStorage.setItem("Lung", "en") }
        function TL(){
            setLanguage([{Flag : "flag-icon flag-icon-th me-1" , Name : "Thailand"}])
            i18n.changeLanguage('tl'); 
            document.body.setAttribute('dir', 'ltr'); document.body.classList.remove('ar');localStorage.setItem("Lung", "tl") }
    
  return (
    <div class="dropdown">
    <button class="btn btn-lg dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <span class={`${Language[0]?.Flag}`}></span> <span>{t(`${Language[0]?.Name}`)}</span></button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li onClick={()=>En()}>
            <a class="dropdown-item active" href="#"><span class="flag-icon flag-icon-us me-1"></span> <span>{t("english")}</span></a>
        </li>
        <li onClick={()=>Ar()}>
            <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-sa me-1"></span> <span>{t("arabic")}</span></a>
        </li>
        <li onClick={()=>TL()}>
            <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-th me-1"></span> <span>{t("thailand")}</span></a>
        </li>
    </ul>
</div>


  )
}

export default DropDown