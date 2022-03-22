import React, { useState } from 'react';

export default function RightLogin() {
  const [register, setRegister] = useState(false);

  function handleOnClick() {
    setRegister(!register)

    if (register === true) {
      alert('Usuário cadastrado com sucesso')
    }
  }

  return (
    <div className="right-side-login">
      <h2 className="welcome">{ register === false ? 'Seja bem-vindo' : 'Digite os dados' }</h2>
      <div className="inputs">
        <label className="label-input" htmlFor="user">Usuário</label>
        <input className="input-login" id="user" type="text" />
      </div>
      <div className="inputs">
        <label className="label-input" htmlFor="password">Senha</label>
        <input className="input-login" id="password" type="text" />
      </div>
      <button 
        className="sign"
        type="button"
        onClick={ handleOnClick }
      >
        { register === false ? 'Entrar' : 'Cadastrar' }
      </button>
    </div>
  )
}
