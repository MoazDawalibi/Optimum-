import React from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import {motion} from 'framer-motion'

function CircleLogo() {


  const size = useWindowSize()
 
  return (
    <div className='BG_LOGO'>
  {/*?xml version="1.0" encoding="UTF-8"?*/}
  <svg
    id="Layer_1"
    className='lg:mt-[35%] ml-16  change-logo-color'
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    width={size?.width  <500  ? 320 :size?.width/2}
    height="700"
    viewBox="0 0 461 449.43"
  >
    <defs>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      .cls-1, .cls-2 {\n        fill: #fff;\n      }\n\n      .cls-3 {\n        fill: none;\n                stroke-linecap: round;\n        stroke-miterlimit: 10;\n        stroke-width: 57.24px;\n      }\n\n      .cls-2 {\n        font-family: UrbancatRg, 'Urbancat Rg';\n        font-size: 93.06px;\n      }\n    "
        }}
      />
    </defs>
    <path
      className="cls-3"
      d="m269,276.05c-19.96,11.46-43.16,17.86-67.84,17.48-73.15-1.11-131.55-61.3-130.45-134.45,1.11-73.15,61.3-131.55,134.45-130.45,63.16.95,115.33,45.96,127.68,105.32"
    />
    <circle className="cls-1" cx="314.48" cy="247.42" r="17.27" />
    <circle className="cls-1" cx="336.76" cy="215.84" r="14.3" />
    <circle className="cls-1" cx="340.39" cy="181.98" r="10.67" />
    {/* <text class="cls-2" transform="translate(0 425.98)"><tspan x="0" y="0">Optimum</tspan></text> */}
    <motion.circle 

      initial={{ x: "-100%", y: "-50%" }}
      animate={{ x: "0", y: 0 }}
      transition={{ duration: 1 , delay:1.3}}

    className="cls-1" cx="387.19" cy="255.88" r="23.64" />
    <motion.circle 
       initial={{ y: "-100%" }}
      animate={{  y: 0 }}
      transition={{ duration: 1 , delay:1.3}}
    
    className="cls-1" cx="437.36" cy="237.56" r="23.64" />
    <motion.circle 
    
    initial={{ x: "100%" }}
    animate={{ x: "0" }}
    transition={{ duration: 1 , delay:1.3}}
    className="cls-1 z-[999]" cx="428.81" cy="290.82" r="23.64" />
  </svg>
    </div>
  )
}

export default CircleLogo