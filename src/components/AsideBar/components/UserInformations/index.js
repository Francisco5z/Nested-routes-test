import React, { useState, useEffect } from 'react';

import { Container, UserLogo, Username } from './styles';

function UserInformations() {
  const [username, setUsername] = useState("Not registered")

  useEffect(() => {
    if (localStorage.getItem('@APP-USERNAME')) {
      setUsername(localStorage.getItem('@APP-USERNAME'));
    }
  }, []);

  /**@param {string} username */
  function getUsernameInitials(username) {
    const usernameSerialized = username.split(' ');
    if (usernameSerialized.length === 1) {
      return `${usernameSerialized[0][0]}${usernameSerialized[0][1]}`
    }
    return `${usernameSerialized[0][0]}${usernameSerialized[1][0]}`;
  }

  return (
    <Container>
      <UserLogo >
        {
          getUsernameInitials(username) === 'Nr' 
            ? <img src={require('../../../../assets/person-24px.svg')} alt="User" />
            : <h1> {getUsernameInitials(username)} </h1>
        } 
      </UserLogo>
      <Username> {username} </Username>
    </Container>
  );
}

export default UserInformations;