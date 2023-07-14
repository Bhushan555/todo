import React from 'react';
import './header.scss';
import logo from '../../assets/img/logo.jpg'
import { SettingSvg } from '../../assets/img/svg';
import { ProfileImg } from '../../assets/img/svg';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-wrap'>
        <img src={logo} alt="" />
      </div>
      <div className="nav-content">
        <input placeholder='search' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        <div className="nav-icons">
            <SettingSvg/>
            <ProfileImg/>
        </div>
      </div>
    </div>
  )
}

export default Header