import React from 'react'
import { useTranslation } from 'react-i18next'
import { TypeAnimation } from 'react-type-animation'

function Typing({title}) {
    const [t]  = useTranslation()
  return (
    <TypeAnimation
    key={title}
    sequence={[
    // Same substring at the start will only be typed out once, initially
    300,
    title,
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
  )
}

export default Typing