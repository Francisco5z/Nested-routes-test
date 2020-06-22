import React from 'react';

import { Container } from './styles';

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Container>
      <Link className="link-to-home" to="/"> 
        <img 
          src={require('../../../../assets/home-black-18dp.svg')} 
          alt="Home"
        />
        Home 
      </Link>
      <Link className="link-to-messages" to="/messages"> 
        <img 
          src={require('../../../../assets/message-black-18dp.svg')} 
          alt="Message"
        />
        Messages 
      </Link>
      <Link className="link-to-notifications" to="/notifications"> 
        <img 
          src={require('../../../../assets/notifications-black-18dp.svg')} 
          alt="Message"
        />
        Notifications 
      </Link>
      <Link className="link-to-contacts" to="/contacts"> 
        <img 
          src={require('../../../../assets/contacts-black-18dp.svg')} 
          alt="Message"
        />
        Contacts 
      </Link>
      <Link className="link-to-settings" to="/settings"> 
        <img 
          src={require('../../../../assets/settings-black-18dp.svg')} 
          alt="Message"
        />
        Settings 
      </Link>
    </Container>
  );
}

export default Navigation;