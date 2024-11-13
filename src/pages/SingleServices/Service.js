import React, { useEffect, useRef, useState } from 'react'
import ThumbNail from './ThumbNail';

import {baseURL} from '../../api/config'
import { useTranslation } from 'react-i18next';
import useLang from '../../hooks/useLang';
import TranslateArray from '../../hooks/useTranslatearray';

function Service({data}) {


    const lang  = useLang();

const images  = [
    data.main_image ,
    ...(data?.images.map(w => w?.path))
]
    const myRef = useRef()
    const [index , setIndex] = useState(0)

   useEffect(()=>{
    myRef.current.children[index].className = "active";
   },[])

      const   handleTab = (index) =>{
        setIndex(index)
        const images = myRef.current.children;
        for(let i=0; i<images.length; i++){
          images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
      };

    
    return(
        <>
     
        
              <div className="details" key={data.id}>
                <div className="big-img">
                  {
                    checkMediaType(baseURL+ images[index]) =='image' ?

                    <img src={baseURL+ images[index]} alt=""/>

                    :
                   
                   
                     <video width={200} height={400} controls>
                     <source  src={baseURL+ images[index]}  />
                   </video>
                
                  }
                </div>
  
                <div className="box">
                  <div className="row">
                    <h2>{TranslateArray(data.translations , lang , "title")}</h2>
                  </div>
  
                  <p className='description'>{TranslateArray(data.translations , lang , "description")}</p>
  
                  <ThumbNail images={images} tab={handleTab} myRef={myRef} />
  
                </div>
              </div>
        
          
        
        
        </>
        
      );
}

export default Service



function checkMediaType(url) {

  if(!url){
    return 'image'
  }
  // List of video file extensions
  const videoExtensions = ["mp4", "avi", "mov", "wmv", "mkv", "flv", "webm"];

  // List of image file extensions
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "svg"];

  // Extract the file extension from the URL
  const fileExtension = url.split('.').pop().toLowerCase();

  // Check if the file extension matches any video extensions
  if (videoExtensions.includes(fileExtension)) {
    return "video";
  }

  // Check if the file extension matches any image extensions
  if (imageExtensions.includes(fileExtension)) {
    return "image";
  }

  // If the extension doesn't match either video or image extensions
  return "unknown";
} 