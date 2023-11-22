import React from 'react'
import s from "./Header.module.css"

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.logo}></div>
        <div className={s.navs}></div>
      </div>
    </div>
  )
}

export default Header
