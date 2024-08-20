import React from 'react'
import "./Senhas.css"
import Senha from '../senha/Senha'

function Senhas() {
  return (
    <>
      <div className='container-botao-senhas'>
        <button className='botao-senha-normal'>Gerar senha normal</button>
        <button className='botao-senha-preferencial'>Gerar senha preferencial</button>
        <button className='botao-ver-senha'>Ver a fila das senhas</button>
      </div>
      <div className='container-senhas'>
        <Senha />
        <Senha />
        <Senha />
        <Senha />
        <Senha />
        <Senha />
        <Senha />
        <Senha />
      </div>
    </>
  )
}

export default Senhas
