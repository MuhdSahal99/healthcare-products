import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => (
  <>
    <Header />
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', width: '100%' }}>{children}</div>
    </div>
  </>
);

export default Layout;