import React from 'react'
import s from './Header.module.css'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.logo}><img src={logo} alt="logo" /></div>
        <div className={s.navs}>
          <div className={s.n1}><NavLink to='characters'>Characters</NavLink></div>
          <div className={s.n2}><NavLink to='locations'>Locations</NavLink></div>
          <div className={s.n3}><NavLink to='episodes'>Episodes</NavLink></div>
        </div>
      </div>
    </div>
  )
}

export default Header
