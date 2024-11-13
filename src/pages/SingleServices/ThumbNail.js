import React from 'react'
import {baseURL} from '../../api/config'
function ThumbNail({images, tab, myRef}) {

    return (
        <div className="thumb" ref={myRef}>
            {
            images.map((img, index) =>(
                <img src={baseURL+ img} alt="" key={index}  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src="/video.jpeg";
                  }}
                onClick={() => tab(index)}
                />


            ))
            }
        </div>
    )

}

export default ThumbNail