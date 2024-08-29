import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context'

function Button() {
  const {setTheme , theme} = useContext(GlobalContext)
  function handleClick(){
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <button onClick={handleClick}>Change</button>
  )
}

export default Button