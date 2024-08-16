import React from 'react'
import logoGrande from "../../assets/farmarcia.PNG.png"
import "./Logo.css"

function Logo() {
  return (
    <div className='containerLogo'>
      <img className='imagemLogo' src={logoGrande} alt='Logo da farmacia'/>
    </div>
  )
}

export default Logo
