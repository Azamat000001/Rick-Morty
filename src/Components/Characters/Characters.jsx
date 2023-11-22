import React from 'react'
import s from './Characters.module.css'
import rickmorty from '../../assets/RickMorty.png'
import searchicon from '../../assets/search-icon.png'

const Characters = () => {
  return (
    <div className={s.container}>

      <div className={s.rickmorty}><img src={rickmorty} alt="rickmorty" /></div>
      <div className={s.search}>
        <div className={s.filter}>
            <div className={s.box}>
                <img src={searchicon} alt="searchicon" />
                <input type="text" placeholder='Filter by name...'/>
            </div>
        </div>
        <div className={s.filter}></div>
        <div className={s.filter}></div>
        <div className={s.filter}></div>
      </div>

    </div>
  )
}

export default Characters
