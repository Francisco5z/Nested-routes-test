import React, { useState } from 'react';
import { toggle } from '../../utils/toggle';

import Separator from '../Separator';
import UserInformation from './components/UserInformations';
import Navigation from './components/Navigation';

import { HamburgerMenu, Aside} from './styles';

function AsideBar() {
  const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);
  const [asideBarActive, setAsideBarActive] = useState(false);

  function handleClickOnMenu() {
    toggle(hamburgerMenuActive, setHamburgerMenuActive);
    toggle(asideBarActive, setAsideBarActive);

    window.addEventListener('click', e => {
      if (e.clientX > 250) {
        setAsideBarActive(false);
        setHamburgerMenuActive(false);
      }
    })
  }

  return (
    <>
      <HamburgerMenu active={hamburgerMenuActive} onClick={handleClickOnMenu}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
      </HamburgerMenu>
      <Aside active={asideBarActive}>
        <UserInformation />
        <Separator />
        <Navigation />
      </Aside>
    </>
  );
}

export default AsideBar;