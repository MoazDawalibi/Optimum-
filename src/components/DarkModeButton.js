import React, { useEffect, useState } from 'react'

function DarkModeButton({setChanged}) {
  const [isdark, setisdark] = useState(false)
  
  function handelDark() {
    setisdark(!isdark)
    if (isdark) {
      document.body.classList.remove('dark')
      localStorage.setItem("theme", "light");
      setChanged(v => !v)

    }
    else {
      document.body.classList.add('dark')
      localStorage.setItem("theme", "dark");
      setChanged(v => !v)

    }
  }
useEffect(() => {
  const theme = localStorage.getItem("theme")
  if (theme === "dark") {
    document.body.classList.add('dark')
    setisdark(true)
    setChanged(v => !v)

  }
}, [])

  return (
    <div className='dark-mode-button'>
    <label class="ui-switch"  onChange={() => handelDark()}>
  <input type="checkbox" defaultChecked={localStorage.getItem("theme") == 'dark'}/>
  <div class="slider">
    <div class="circle"></div>
  </div>
</label>

    </div>
  )
}

export default DarkModeButton