import React, { useState } from 'react'

const Fillter = () => {
    const [Open, setOpen] = useState(true)
   function OnFillter(){
    setOpen(v=>!v)
    signUp()

    }
    const signUp=()=>{
    const Left_Side = document.getElementById('Left_Side');
        if(Open){
            Left_Side.classList.add("FillterON");

        }
        else{
            Left_Side.classList.remove("FillterON");

        }
    }
   
    return (
        <div className='Fillter'>
            Fillter
            <div className="toggler">
                <input id="toggler-1" name="toggler-1" type="checkbox" value="true" onClick={()=>OnFillter()}/>
                <label htmlFor="toggler-1">
                    <svg className="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                        <polyline className="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                    </svg>
                    <svg className="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                        <line className="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                        <line className="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                    </svg>
                </label>
            </div>
        </div>
    )
}

export default Fillter