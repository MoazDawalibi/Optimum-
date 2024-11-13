import React from 'react'

function Color({colors}) {
    return (
        <div className="colors">
            {
            colors.map((color, index) =>(
                <button style={{background: color}} key={index}></button>
            ))
            }
        </div>
  )
}

export default Color