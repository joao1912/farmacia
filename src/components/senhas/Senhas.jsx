import React, { useEffect, useState } from 'react'
import "./Senhas.css"
import generatePassword from '../../utils/generatePassword'
import Senha from '../senha/Senha'

function Senhas() {

  const [senhas, setSenhas] = useState([[], []])
  const [isVisible, setIsVisible] = useState(false)

  function createTicket(type) {

    const ticket = type == "preferencial" 
    ? generatePassword.execute(false) 
    : generatePassword.execute(true)

    if (ticket[0] === "N") {
      setSenhas(prevSenhas => [
        [...prevSenhas[0]],
        [...prevSenhas[1], ticket]
      ]);
    } else {
      setSenhas(prevSenhas => [
        [...prevSenhas[0], ticket],
        [...prevSenhas[1]]
      ]);
    }
  
  }

  function chamarProximo() {

    if (senhas[0].length == 0 && senhas[1].length == 0) {
      alert("Não tem senhas cadastradas.")
      return
    }

    if (senhas[0].length > 0) {

      setSenhas(prevSenhas => [
        prevSenhas[0].slice(1), 
        [...prevSenhas[1]]
      ]);
      return;
    }
  
    setSenhas(prevSenhas => [
      [...prevSenhas[0]],
      prevSenhas[1].slice(1)
    ]);

  }
  

  return (
    <>
      <div className='container-botao-senhas'>
        <button className='botao-senha-normal' onClick={() => {createTicket("normal")}}>Gerar senha normal</button>
        <button className='botao-senha-preferencial' onClick={() => {createTicket("preferencial")}}>Gerar senha preferencial</button>
        <button className='botao-ver-senha' onClick={() => {setIsVisible(!isVisible)}}>
          {isVisible ? "Fechar a fila das senhas" : "Ver a fila das senhas"}
        </button>
      </div>
      <div className='container-senhas' style={{display: isVisible ? "flex" : "none"}}>
        {senhas[0].length > 0 && senhas[0].map((ticket, index) => (
          <Senha key={index} ticket={ticket} />
        ))}
        {senhas[1].length > 0 && senhas[1].map((ticket, index) => (
          <Senha key={index} ticket={ticket} />
        ))}
        <button className='botao-proximo' onClick={chamarProximo}>
          Chamar o próximo
        </button>
      </div>
    </>
  )
}

export default Senhas
