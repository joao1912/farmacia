import React from 'react'
import "./Senha.css"

function Senha({ticket}) {
  return (
    <div className='container-senha'>
      <div style={{ paddingLeft: "30px", width: "30%" }}>
        <img alt='Icon Ticket' src='./t1.png'/>
      </div>
      <div>
        <span>{ticket}</span>
      </div>
    </div>
  )
}

export default Senha
