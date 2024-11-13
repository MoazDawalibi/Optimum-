import React from 'react'
import Services_Card from './Services_Card'
import { useTranslation } from 'react-i18next';
import CircleService from '../../components/CircleService';

const Services = ({services}) => {
  const {t} = useTranslation()

  return (
    <div className='Services' id='service'>
       <div className="loader">
          <span className='Word_Services'>{t("services")}</span>
          <span>{t("services")}</span>
        </div>
     <div className='contener-service'>
      
        <CircleService services={services} />
     </div>
  </div>
  )
}

export default Services