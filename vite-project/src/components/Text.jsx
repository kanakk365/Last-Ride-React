import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context'

function Text() {
    const {theme} = useContext(GlobalContext)
  return (
    <h1 style={{backgroundColor : theme==="light" ? 'white' : 'black' , color: theme ==="light" ? "black" : "white" }} >Kanak</h1>
  )
}

export default Text