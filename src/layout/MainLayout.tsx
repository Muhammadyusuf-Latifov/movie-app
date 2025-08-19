import { memo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import BottomMenu from './components/BottomMenu';

const MainLayout = () => {
  return (
    <>
      <Header/>
        <BottomMenu/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default memo(MainLayout);