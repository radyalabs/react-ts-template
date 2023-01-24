import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutProvider } from 'contexts/LayoutContext/LayoutContext';

import Content from './components/layout/Content/Content';
import Header from './components/layout/Header/Header';
import Sidebar from './components/layout/Sidebar/Sidebar';

import './App.css';

const App = () => (
  <LayoutProvider>
    <Header />
    <Sidebar />
    <Content>
      <Outlet />
    </Content>
  </LayoutProvider>
);

export default App;
