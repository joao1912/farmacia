import React, { useState } from 'react'
import "./Body.css"
import Apresentacao from '../apresentacao/Apresentacao'
import Senhas from '../senhas/Senhas'

function Body() {

  const [mostrarSenha, setMostrarSenha] = useState(false)

  return (
    <section className='containerBody' >

      {
        !mostrarSenha ? <Apresentacao /> : <Senhas />
      }

      <div className='containerButton'>
        <button className='buttonSenhas' onClick={
          () => {setMostrarSenha(!mostrarSenha)}
        }>
          {
            !mostrarSenha ? <span>Senhas</span> : <span>Home</span>
          }
        </button>
      </div>

    </section>
  )
}

export default Body
