import React from 'react'
import "./Header.css"
import Logo from '../logo/Logo'

function Header() {
  return (
    <header>
        <Logo />
        <div className='box-container'>
            <button className='buttonSenhas'>Senhas</button>
        </div>  
    </header>
  )
}

export default Header
