import React, { useState } from 'react';

import { Container } from './styles';

import Separator from '../../../../components/Separator';

function Settings() {
  const [username, setUsername] = useState('');

  const storagedUser = localStorage.getItem('@APP-USERNAME')

  function handleRegister() {
    localStorage.setItem('@APP-USERNAME', username);

    window.location.reload();
  }

  return (
    <Container>
      <header className="header-template">
        <h1> Settings </h1>
        <Separator />
      </header>
      <main className="main-el-template">
        <div className="register-box">
          <p> {storagedUser ? "Your name" : "Register"} </p>
          <div>
            <input
              value={username}
              onChange={e => setUsername(e.target.value)} 
              type="text" 
              placeholder={storagedUser ? storagedUser : "Your name"} 
            />
            <button onClick={handleRegister}> {storagedUser ? "Rename" : "Register"} </button>
          </div>
        </div>
      </main>
    </Container>
  );
}

export default Settings;