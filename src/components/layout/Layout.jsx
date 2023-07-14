import React from 'react'
import Header from '../../common/header/Header';
import LeftSideBar from '../../common/leftSideBar/LeftSidebar'
import SecondarySidebar from '../../common/secondarySidebar/SecondarySidebar';
import RightSidebar from '../../common/rightSideBar/RightSidebar';
import Footer from '../../common/footer/Footer';
import Body from '../../common/body/Body';
import './layout.scss'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <div className='parent'>
        <LeftSideBar />
        <SecondarySidebar />
        <div className='body-parent'>
          <div className='body'>
            <Outlet/>
          </div>
          <Footer />
        </div>
        <RightSidebar />
      </div>
    </div>

  )
}

export default Layout