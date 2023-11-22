import React from 'react'
import s from './Content.module.css'
import { Route, Routes } from 'react-router-dom'
import Characters from '../Components/Characters/Characters'
import Locations from '../Components/Locations/Locations'
import Episodes from '../Components/Episodes/Episodes'

const Content = () => {
  return (
    <div className={s.wrapper}>
      <Routes>
        <Route path='characters' element={ <Characters/> }/>
        <Route path='locations' element={ <Locations/> }/>
        <Route path='episodes' element={ <Episodes/> }/>

      </Routes>
    </div>
  )
}

export default Content
