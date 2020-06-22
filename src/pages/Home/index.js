import React from 'react';
import { Route } from 'react-router-dom';

import HomeTemplate from './components/Home'
import ContactsTemplate from './components/Contacts'
import SettingsTemplate from './components/Settings';
import MessageTemplate from './components/Messages';
import NotificationsTemplate from './components/Notifications';

import AsideBar from '../../components/AsideBar';

function Home({ match: { url }, location }) {
  function resolveUrlPath(url, path) {
    if (url === '/') {
      return path
    } else {
      return `${url}${path}`
    }
  }
  return (
    <div style={{ paddingTop: 50 }}>
      <AsideBar />
      <Route path={resolveUrlPath(url, '/')} component={HomeTemplate} exact />
      <Route path={resolveUrlPath(url, "/messages")} component={MessageTemplate} />
      <Route path={resolveUrlPath(url, '/notifications')} component={NotificationsTemplate} /> 
      <Route path={resolveUrlPath(url, '/contacts')} component={ContactsTemplate} />
      <Route path={resolveUrlPath(url, '/settings')} component={SettingsTemplate} />
    </div>
  );
}

export default Home;